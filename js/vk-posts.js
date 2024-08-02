const api =
  'https://api.vk.com/method/wall.get?access_token=4718792b4718792b4718792bf04402aaca447184718792b21b4b02fb2620dc8a7f1ad25&domain=publictransportscale&count=3&v=5.199';

const newsLink = document.querySelectorAll('.news__item-link');
const newsDate = document.querySelectorAll('.news__item-date');

function renderNews(data) {
  newsLink[0].textContent = data.text;
  newsDate[0].textContent = data.date;
}

fetch(api)
  .then((data) => {
    return data.json();
  })
  .then((info) => {
    renderNews(info.current);
  });
