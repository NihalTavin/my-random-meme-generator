const memelist = [
    'kamlesh',
    'yeah yeah',
    'Yo jogindar! Tara bhai Jogindar!',
    'Mummy roti dedo',
    'Black colour wow orange wow wow wow',
    'Systum!!!',
    'Mei au kya',
    'Chin tapak dum dum',
    'beta kya karta hai apka gym jata hai',
    'Honeymoon ke liye gaye Germany, apne sajna ko pasnad missionary',
    'Bijli ka bill tera baap barega?',
    'Very Demure'
  ];
  
  function randomMeme() {
    return memelist[Math.floor(Math.random() * memelist.length)];
  }
  
  export default randomMeme;
  