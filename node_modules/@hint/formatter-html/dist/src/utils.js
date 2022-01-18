"use strict";
(function () {
    const linkify = function (msg) {
        const regex = /(https?:\/\/[a-zA-Z0-9.\\/?:@\-_=#]+\.[a-zA-Z0-9&.\\/?:@-_=#]*)\s[a-zA-Z]/g;
        const match = regex.exec(msg);
        if (!match) {
            return msg;
        }
        const urlMatch = match.pop();
        const newMsg = msg.replace(urlMatch, `<a href="${urlMatch}">${urlMatch}</a>`);
        return newMsg;
    };
    const reverseString = (str) => {
        return str.split('').reverse()
            .join('');
    };
    const cutString = (str, maxLength) => {
        const minLength = 0.8 * maxLength;
        const preferredStopChars = /[^a-zA-Z0-9]/g;
        let chunk;
        for (let i = minLength; i < maxLength; i++) {
            if (preferredStopChars.test(str[i])) {
                chunk = str.slice(0, i);
                break;
            }
        }
        chunk = chunk || str.slice(0, maxLength);
        return chunk;
    };
    const shortenString = (string, maxLength) => {
        if (!string || string.length < maxLength * 2) {
            return string;
        }
        const headChunk = cutString(string, maxLength);
        const reverseTailChunk = cutString(reverseString(string), maxLength);
        const tailChunk = reverseString(reverseTailChunk);
        return `${headChunk} … ${tailChunk}`;
    };
    const cutCodeString = (codeString) => {
        return shortenString(codeString, 150);
    };
    const cutUrlString = (urlString) => {
        return shortenString(urlString, 25);
    };
    const normalizePosition = (position) => {
        if (!position || parseInt(position) === -1) {
            return '';
        }
        return `:${position}`;
    };
    const hintStatus = {
        pass: 'pass',
        pending: 'pending'
    };
    const noIssues = (caregory) => {
        return caregory.hints.every((hint) => {
            return hint.status === hintStatus.pass;
        });
    };
    const noPending = (category) => {
        return category.hints.every((hint) => {
            return hint.status !== hintStatus.pending;
        });
    };
    const filterErrorsAndWarnings = (category) => {
        if (!category) {
            return [];
        }
        return category.hints.filter((hint) => {
            return hint.status !== hintStatus.pass;
        });
    };
    const passedHints = (category) => {
        if (!category) {
            return [];
        }
        return category.hints.filter((hint) => {
            return hint.status === hintStatus.pass;
        });
    };
    const utils = {
        cutCodeString,
        cutUrlString,
        filterErrorsAndWarnings,
        linkify,
        noIssues,
        noPending,
        normalizePosition,
        passedHints
    };
    if (typeof module === 'object' && module.exports) {
        module.exports = utils;
    }
    else {
        window.utils = utils;
    }
}());
