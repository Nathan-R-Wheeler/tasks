/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    if (numbers.length === 0) {
        return numbers;
    } else if (numbers.length === 1) {
        const doubleArray = [...numbers, numbers[0]];

        return doubleArray;
    } else {
        const first = numbers[0];
        const last = numbers[numbers.length - 1];
        const firstLast = [first, last];
        return firstLast;
    }
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripledNumbers = numbers.map(
        (numbers: number): number => 3 * numbers,
        numbers,
    );
    return tripledNumbers;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const intList = numbers.map((thisNumber) => {
        const parsedList = parseInt(thisNumber);
        if (isNaN(parsedList)) {
            return 0;
        } else {
            return parsedList;
        }
    });
    return intList;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const fixedNumbers = [] as number[];
    amounts.map((number) => {
        const fixedNumber = Number(number.replace("$", ""));
        if (isNaN(fixedNumber)) {
            fixedNumbers.push(0);
        } else {
            fixedNumbers.push(fixedNumber);
        }
    });
    return fixedNumbers;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const removeQues = messages.filter((word) => !word.endsWith("?"));
    const toCap = removeQues.map((word) =>
        word.endsWith("!") ? word.toUpperCase() : word,
    );
    return toCap;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const wordsLength = words.map((word) => word.length);
    const lowertnFour = wordsLength.filter((length) => length < 4);
    const numWords = lowertnFour.length;

    return numWords;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const loweredCase = colors.map((string) => string.toLowerCase());
    const validColors = ["red", "green", "blue"];
    return loweredCase.every((color) => validColors.includes(color));
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    } else if (addends.length === 1) {
        return `${addends[0]}=${addends[0]}`;
    } else {
        const sum = addends.reduce(
            (currentTotal, num) => currentTotal + num,
            0,
        );
        const addingNum = addends.join("+");
        return `${sum}=${addingNum}`;
    }
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    const initialize = {
        hasNegative: false,
        sum: 0,
        finalArray: [] as number[],
    };
    const finalAccumulator = values.reduce((accumulator, value) => {
        const { hasNegative, sum, finalArray } = accumulator;

        if (!hasNegative) {
            if (value < 0) {
                return {
                    hasNegative: true,
                    sum: sum,
                    finalArray: [...finalArray, value, sum],
                };
            } else {
                return {
                    hasNegative: false,
                    sum: sum + value,
                    finalArray: [...finalArray, value],
                };
            }
        } else {
            return {
                ...accumulator,
                finalArray: [...finalArray, value],
            };
        }
    }, initialize);
    if (!finalAccumulator.hasNegative) {
        return [...finalAccumulator.finalArray, finalAccumulator.sum];
    } else {
        return finalAccumulator.finalArray;
    }
}
