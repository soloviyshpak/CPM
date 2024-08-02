const newsLink = document.querySelectorAll('.news__item-link');
const newsDate = document.querySelectorAll('.news__item-date');

function timeConverter(UNIX_timestamp) {
  let a = new Date(UNIX_timestamp * 1000);
  let months = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
  ];
  let year = a.getFullYear();
  let month = months[a.getMonth()];
  let date = a.getDate();
  let time = `${date}.${month}.${year}`;
  return time;
}

var script = document.createElement('SCRIPT');
script.src =
  'https://api.vk.com/method/wall.get?access_token=4718792b4718792b4718792bf04402aaca447184718792b21b4b02fb2620dc8a7f1ad25&domain=publictransportscale&count=3&v=5.199&callback=callbackFunc';
document.getElementsByTagName('head')[0].appendChild(script);
function callbackFunc(result) {
  for (let i = 0; i < 3; ++i) {
    newsLink[i].textContent = result.response.items[i].text;
    newsLink[i].setAttribute(
      'href',
      `https://vk.com/publictransportscale?w=wall${result.response.items[i].from_id}_${result.response.items[i].id}`
    );
    newsDate[i].textContent = timeConverter(result.response.items[i].date);
  }
}
