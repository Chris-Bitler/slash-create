"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const permissions_1 = __importDefault(require("./permissions"));
const resolvedMember_1 = __importDefault(require("./resolvedMember"));
/** Represents a Discord guild member. */
class Member extends resolvedMember_1.default {
    /**
     * @param data The data for the member
     * @param creator The instantiating creator
     */
    constructor(data, creator) {
        super(data, data.user, creator);
        this.mute = data.mute;
        this.deaf = data.deaf;
        this._permissions = data.permissions;
    }
    /** The permissions the member has. */
    get permissions() {
        if (!this._permissionsBitfield)
            this._permissionsBitfield = new permissions_1.default(BigInt(this._permissions));
        return this._permissionsBitfield;
    }
    /** @hidden */
    toString() {
        return `[Member ${this.id}]`;
    }
}
exports.default = Member;
