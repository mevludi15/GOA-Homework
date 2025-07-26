const books = [
  {
    title: "1984",
    author: "ჯორჯ ორუელი",
    info: "დისტოპიური რომანი, რომელიც აღწერს ტოტალიტარული რეჟიმის კონტროლს ადამიანზე.",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQIj5Tg3wbVjweBEp311ZWE0zQLl_e4jIuLhDs3go6BvgoWBTC-"
  },
  {
    title: "დოსტოევსკის ბრალი და სასჯელი",
    author: "ფიოდორ დოსტოევსკი",
    info: "ფსიქოლოგიური რომანი დანაშაულსა და სინდისზე.",
    image: "https://api.palitral.ge/storage/upload/image-png/2023-02-08/Untitled-2_5e4608dfd0d086206acde3cd13413c4e.png"
  },
  {
    title: "მარტოობის ასი წელი",
    author: "გაბრიელ გარსია მარკესი",
    info: "მაგიური რეალიზმის შესანიშნავი ნიმუში ბუენდიათა საგაზე.",
    image: "https://apiv1.biblusi.ge/storage/book/oVvQ20I5Jq7KqtXIEDUVxwZeLqs0J7LkLbBTx9C0.jpg"
  },
  {
    title: "პატარა უფლისწული",
    author: "ანტუან დე სენტ-ეგზიუპერი",
    info: "ფილოსოფიური ზღაპარი ბავშვებისთვის და დიდებისთვის.",
    image: "https://elibrary.sou.edu.ge/files/books/book-414/cover-414.jpg"
  },
  {
    title: "ჰარი პოტერი და ფილოსოფიური ქვა",
    author: "ჯოან როულინგი",
    info: "ჯადოსნური თავგადასავალი ჰოგვარტსის სკოლაში.",
    image: "https://sulakauri.ge/uploads/2023/11/hari-poteri-da-philosophiuri-qva.webp"
  },
  {
    title: "ზღაპარი ორველი",
    author: "ჯორჯ ორუელი",
    info: "პოლიტიკური სატირა ტოტალიტარიზმზე ცხოველების ფერმის მეშვეობით.",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Animal_Farm_-_1st_edition.jpg"
  },
  {
    title: "ალქიმიკოსი",
    author: "პაულო კოელიო",
    info: "სულის მოგზაურობა და საკუთარი ბედის პოვნა.",
    image: "https://www.lit.ge//shop/uploads/shop_product_image_1180.jpg"
  },
  {
    title: "მზის ჩრდილში",
    author: "ნოდარ დუმბაძე",
    info: "სევდიანი და თბილი მოთხრობა ქართველ ახალგაზრდაზე.",
    image: "https://booksale.ge/uploads/books/1711980836.png"
  },
  {
    title: "დრაკონთან მებრძოლი",
    author: "ჯოან როულინგი (ფანტაზიური ავტორი)",
    info: "საბავშვო ფენტეზის წიგნი გმირზე, რომელიც უნდა შეებრძოლოს ბნელ ძალებს.",
    image: "https://imgv2-2-f.scribdassets.com/img/document/801224316/original/f2feb41027/1?v=1"
  }
];

const subm = document.getElementById("submit")
const book = document.getElementById("book")
let div = document.getElementsByClassName("books")
// books.map(item => {
//     console.log(item)
    
    
// }) 

subm.addEventListener("click", (e) => { 
    books.map(item => {
        div.innerHTML += `
        <img src="${item.image}" alt="" width="250px" height="250px">
        <p style="text-align: center;">Author: ${item.author}</p>
        <p>${item.info}</p>
        `
    })
    e.preventDefault()
})