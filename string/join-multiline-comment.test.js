import { joinComment } from './join-multiline-comment.js';

describe('join-multiline-comment', () => {
    describe('*式多行注释', () => {
        test('完整行', () => {
            const real = ` * Let's build
 * Alpine together.`;
            const expected = `Let's build Alpine together.`;
            expect(joinComment(real)).toBe(expected);
        });

        test('首行不带 *', () => {
            const real = ` Let's build
 * Alpine together.`;
            const expected = `Let's build Alpine together.`;
            expect(joinComment(real)).toBe(expected);
        });

        test('末行带 */', () => {
            const real = ` * Let's build
 * Alpine together.
 */`;
            const expected = `Let's build Alpine together.`;
            expect(joinComment(real)).toBe(expected);
        })

        test('真实案例', () => {
            const real = `This is the reactivity core of Alpine. It's the part of
 * Alpine that triggers an element with x-text="message"
 * to update its inner text when "message" is changed.
 */`;
            const expected = `This is the reactivity core of Alpine. It's the part of Alpine that triggers an element with x-text="message" to update its inner text when "message" is changed.`;
            expect(joinComment(real)).toBe(expected);
        })
    });


    describe('//式多行注释', () => {
        test('完整行', () => {
            const real = ` // Some
// comment`
            const expected = `Some comment`;
            expect(joinComment(real)).toBe(expected);
        });

        test('首行不带 //', () => {
            const real = `Some
// comment`
            const expected = `Some comment`;
            expect(joinComment(real)).toBe(expected);
        });
    });
});