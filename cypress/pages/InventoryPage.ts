import { InventoryPageData } from "../data/InventoryPageData";
const data = new InventoryPageData().getElements();
export class InventoryPage {
  getTitle() {
    data.title().should("contain", "Products");
  }
}
