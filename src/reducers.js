import { handleAction } from "redux-actions";
import { ROLL_DIE_ONE, ROLL_DIE_TWO } from "./actions";
import getRandonInt from "./randomizer";

const defaultDieOne = getRandonInt(1, 6);
const defaultDieTwo = getRandonInt(1, 6);

export const dieOne = handleAction(ROLL_DIE_ONE, (state, { payload }) => payload, defaultDieOne);

export const dieTwo = handleAction(ROLL_DIE_TWO, (state, { payload }) => payload, defaultDieTwo);
