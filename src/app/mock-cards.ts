import { Card } from "./classes/card"
import { Deck } from "./classes/deck"

let _majorarcana = new Deck("major-arcana");
_majorarcana.addCard(new Card("MA-Card1", "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-world_1024x1024.png?v=1489193487",
    "UpLoveMenaing", "UpCareerMenaing", "UpFinancesMeaning", "DownLoveMeaning", "DownCareerMeaning", "DownFinancesMeaning"));
_majorarcana.addCard(new Card("MA-Card2", "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-world_1024x1024.png?v=1489193487",
    "UpLoveMenaing", "UpCareerMenaing", "UpFinancesMeaning", "DownLoveMeaning", "DownCareerMeaning", "DownFinancesMeaning"));
_majorarcana.addCard(new Card("MA-Card3", "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-world_1024x1024.png?v=1489193487",
    "UpLoveMenaing", "UpCareerMenaing", "UpFinancesMeaning", "DownLoveMeaning", "DownCareerMeaning", "DownFinancesMeaning"));

let _wands = new Deck("suit-wands");
_wands.addCard(new Card("SW-Card1", "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-world_1024x1024.png?v=1489193487",
    "UpLoveMenaing", "UpCareerMenaing", "UpFinancesMeaning", "DownLoveMeaning", "DownCareerMeaning", "DownFinancesMeaning"));
_wands.addCard(new Card("SW-Card2", "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-world_1024x1024.png?v=1489193487", "UpLoveMenaing", "UpCareerMenaing", "UpFinancesMeaning",
    "DownLoveMeaning", "DownCareerMeaning", "DownFinancesMeaning"));
_wands.addCard(new Card("SW-Card3", "https://cdn.shopify.com/s/files/1/1325/0879/articles/tarot-card-meanings-cheat-sheet-major-arcana-world_1024x1024.png?v=1489193487",
    "UpLoveMenaing", "UpCareerMenaing", "UpFinancesMeaning", "DownLoveMeaning", "DownCareerMeaning", "DownFinancesMeaning"));

export const DECKS: Deck[] = [_majorarcana, _wands]