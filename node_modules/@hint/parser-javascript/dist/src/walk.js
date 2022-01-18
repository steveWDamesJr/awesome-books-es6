"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.combineWalk = exports.base = void 0;
const acornWalk = require("acorn-walk");
const { extend } = require('acorn-jsx-walk');
const acornWalkBase = acornWalk.base;
extend(acornWalkBase);
exports.base = acornWalkBase;
const getCurrentVisitorsOrCallback = (walkArray, node, base, state) => {
    const item = walkArray.find(([key]) => {
        return key.node === node && key.base === base && key.state === state;
    });
    return item ? item[1] : null;
};
const defaultCallbacksProperty = 'callbacks';
const performWalk = (walkArrays) => {
    Object.entries(walkArrays).forEach(([methodName, walkArray]) => {
        walkArray.forEach(([{ node, state, base }, visitors]) => {
            let allVisitors = {};
            if (visitors.has(defaultCallbacksProperty)) {
                const callbacks = visitors.get(defaultCallbacksProperty);
                allVisitors = (callbackNode, callbackState, typeOrAncestors) => {
                    callbacks.forEach((callback) => {
                        callback(callbackNode, callbackState, typeOrAncestors);
                    });
                };
            }
            else {
                for (const [name, callbacks] of visitors) {
                    allVisitors[name] = (callbackNode, ancestors) => {
                        callbacks.forEach((callback) => {
                            callback(callbackNode, ancestors);
                        });
                    };
                }
            }
            acornWalk[methodName](node, allVisitors, base, state);
        });
    });
};
const prepareWalk = () => {
    const walkArrays = {
        ancestor: [],
        full: [],
        fullAncestor: [],
        simple: []
    };
    const getWalkAccumulator = (methodName) => {
        if (!walkArrays[methodName]) {
            walkArrays[methodName] = [];
        }
        return (node, visitorsOrCallback, base, state) => {
            let currentVisitors = getCurrentVisitorsOrCallback(walkArrays[methodName], node, base, state);
            if (!currentVisitors) {
                currentVisitors = new Map();
                walkArrays[methodName].push([{ base, node, state }, currentVisitors]);
            }
            if (typeof visitorsOrCallback === 'function') {
                const name = defaultCallbacksProperty;
                const visitorCallbacks = currentVisitors.get(name) || [];
                visitorCallbacks.push(visitorsOrCallback);
                currentVisitors.set(name, visitorCallbacks);
            }
            else {
                for (const [name, callback] of Object.entries(visitorsOrCallback)) {
                    const mapName = name;
                    const visitorCallbacks = currentVisitors.get(mapName) || [];
                    visitorCallbacks.push(callback);
                    currentVisitors.set(mapName, visitorCallbacks);
                }
            }
        };
    };
    const listeners = [];
    const onComplete = (listener) => {
        listeners.push(listener);
    };
    const walk = {
        ancestor: getWalkAccumulator('ancestor'),
        full: getWalkAccumulator('full'),
        fullAncestor: getWalkAccumulator('fullAncestor'),
        onComplete,
        simple: getWalkAccumulator('simple')
    };
    return { listeners, walk, walkArrays };
};
const combineWalk = async (register) => {
    const { listeners, walk, walkArrays } = prepareWalk();
    await register(walk);
    performWalk(walkArrays);
    await Promise.all(listeners.map((listener) => {
        return listener();
    }));
};
exports.combineWalk = combineWalk;
