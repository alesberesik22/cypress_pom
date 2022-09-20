export class InventoryPageData {
  private elements = {
    title: () => cy.get('[class="title"]'),
  };
  getElements() {
    return this.elements;
  }
}
