type TChildId = number;
type TGiftId = string;
type TChildrenGifts = Map<TChildId, TGiftId[]>;

export class GiftRegistry {
  #childrenGifts: TChildrenGifts = new Map();

  getGiftsForChild(childId: TChildId) {
    return this.#childrenGifts.get(childId) ?? [];
  }

  addGift(childId: TChildId, giftId: TGiftId) {
    const childGifts = this.getGiftsForChild(childId);

    this.#childrenGifts.set(childId, [...childGifts, giftId]);
  }

  removeGift(childId: TChildId, giftId: TGiftId) {
    const childGifts = this.getGiftsForChild(childId);

    const filteredOutGifts = childGifts.filter((gift) => gift !== giftId);
    if (filteredOutGifts.length === childGifts.length) {
      throw new Error("Gift not found");
    }

    this.#childrenGifts.set(childId, filteredOutGifts);
  }
}
