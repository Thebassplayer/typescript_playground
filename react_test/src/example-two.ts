class Article {
  public title: string;
  private price: number;
  constructor(title: string, price: number) {
    this.title = title;
    this.price = price;
  }
}
const article = new Article("Smashing Book 6", 39);
console.log(article.price);
