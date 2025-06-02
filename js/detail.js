const blogPosts = {
  1: {
    title: "Yapay Zeka Nedir?",
    author: "Jordan Gibbs",
    date: "10 Mayıs 2025",
    content: `
      <p>Yapay zeka (AI), makinelerin insan benzeri düşünme yeteneği kazanmasını sağlayan bir alandır...</p>
      <p>Veriyle öğrenir, algoritmalarla işler.</p>
    `
  },
  2: {
    title: "Web Geliştirme Temelleri",
    author: "Ada Lovelace",
    date: "12 Mayıs 2025",
    content: `
      <p>HTML, CSS ve JavaScript; web geliştirmede kullanılan üç temel teknolojidir...</p>
      <p>İyi yapılandırılmış bir HTML, güçlü bir CSS ve etkileşimli bir JavaScript birleştiğinde harika işler çıkar!</p>
    `
  },
  3: {
    title: "ChatGPT Beyni Zehirliyor mu?",
    author: "Jordan Gibbs",
    date: "16 Mayıs 2025",
    content: `
      <p>Yapay zekâ çağında bilgiye ulaşmak çok kolaylaştı. Ancak bu kolaylık, düşünme ve sorgulama becerilerimizi elimizden alıyor olabilir.</p>
      <p>Özellikle ChatGPT gibi araçlar, doğru kullanıldığında üretkenliği artırırken, sürekli başvurmak bağımlılık yaratabiliyor.</p>
      <h2>Bilgi mi, Ezber mi?</h2>
      <p>İnsanlar artık bilgiyi öğrenmekten çok yapay zekaya sormayı tercih ediyor. Bu da bilgiyi sindirme değil, "kopyala-yapıştır" alışkanlığı oluşturuyor.</p>
    `
  }
};

const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

const headerEl = document.getElementById("blog-header");
const contentEl = document.getElementById("blog-content");

if (blogPosts[postId]) {
  const post = blogPosts[postId];
  headerEl.innerHTML = `
    <h1>${post.title}</h1>
    <p class="author">${post.author} · ${post.date}</p>
  `;
  contentEl.innerHTML = post.content;
} else {
  headerEl.innerHTML = `<h1>Blog Bulunamadı</h1>`;
  contentEl.innerHTML = `<p>Böyle bir yazı mevcut değil.</p>`;
}

document.getElementById("commentForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const textarea = this.querySelector("textarea");
  const comment = textarea.value;
  if (!comment) return;

  const li = document.createElement("li");
  li.textContent = comment;
  document.getElementById("commentList").appendChild(li);
  textarea.value = "";
});
