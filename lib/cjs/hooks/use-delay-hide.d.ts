/**
 * When show = false is passed, triggers the hide state to be changed with
 * a delay. This is useful for animated components where an animation should
 * run on exit, but there is a delay so that the animation can finish before
 * the item is removed from the DOM.
 *
 * @param show
 * @param delayMs
 * @returns
 */
export default function useDelayHide(show: boolean, delayMs?: number): boolean;
