const quotes =[
    {
        quote: "직업에서 행복을 찾아라. 아니면 행복이 무엇인지 절대 모를 것이다.",
        author: "엘버트 허버드",
    },
    {
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
        author: "단테",
    },
    {
        quote: "오랫동안 꿈을 그리는 사람은 마침내 그 꿈을 닮아 간다.",
        author: "앙드레 말로",
    },
    {
        quote: "성공의 비결은 단 한 가지, 잘할 수 있는 일에 광적으로 집중하는 것이다.",
        author: "톰 모나건",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
        author: "찰스다윈",
    },
    {
        quote: "네 믿음은 네 생각이 된다 . 네 생각은 네 말이 된다. 네말은 네 행동이 된다 네행동은 네 습관이된다 . 네 습관은 네 가치가 된다 . 네 가치는 네 운명이 된다.",
        author: "간디",
    },
    {
        quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
        author: "나폴레옹",
    },
    {
        quote: "고개 숙이지 마십시오. 세상을 똑바로 정면으로 바라보십시오.",
        author: "헬렌 켈러",
    },
    {
        quote: "자신을 내보여라. 그러면 재능이 드러날 것이다.",
        author: "발타사르 그라시안",
    },
    {
        quote: "당신이 할수 있다고 믿든 할수 없다고 믿든 믿는 대로 될것이다.",
        author: "헨리 포드",
    },

]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todayQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;