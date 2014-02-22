FIXTURES = {};

FIXTURES['GET /jobs'] = [
  200,
  { 'Content-Type': 'application/json' },
  JSON.stringify({
  "jobs": [
    {
      "id": 1,
      "title": "Back-End Developer at Runtastic",
      "description": "We are a rapidly growing health and fitness company. We maintain a suite of mobile and web apps, products and services that track and manage health and fitness data. With over 65 million app downloads, Runtastic is a recognized leader when it comes to mobile technology and fitness app development."
    },
    {
      "id": 2,
      "title": "Senior Rails Developer at Techvox Inc.",
      "description": "TechVOX is a software company building products focussed on the Sign and Graphics Industry. Our flagship product signVOX is used in over 700 small and medium size Sign Businesses through out the world. Over the past 3 years we have built signVOX to be the number one cloud based platform for the Sign and Graphics industry. We are based in Palo Alto, California with offices in New Hampshire and India."
    }
  ]
})];
