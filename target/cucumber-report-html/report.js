$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Search.feature");
formatter.feature({
  "line": 2,
  "name": "Example feature",
  "description": "\nIn order to ensure news is authentication\nAs a news agent\nI want to ensure is being broadcast by reputable news media company",
  "id": "example-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@complete"
    }
  ]
});
formatter.before({
  "duration": 10682160600,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Searching Google for Guidance Tone Article",
  "description": "",
  "id": "example-feature;searching-google-for-guidance-tone-article",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I navigate to \"https://www.theguardian.com/tone/news\"",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I select the first news article",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I navigate to second site \"https://www.google.co.uk\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I search for the article",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I should see the search result on \"the article\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.theguardian.com/tone/news",
      "offset": 15
    }
  ],
  "location": "SearchStep.navigateToFirstSite(String)"
});
formatter.result({
  "duration": 6018709900,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.firstArticle()"
});
formatter.result({
  "duration": 516575000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "https://www.google.co.uk",
      "offset": 27
    }
  ],
  "location": "SearchStep.navigateToSecondSite(String)"
});
formatter.result({
  "duration": 4810488200,
  "status": "passed"
});
formatter.match({
  "location": "SearchStep.theArticle()"
});
formatter.result({
  "duration": 2811830900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "the article",
      "offset": 35
    }
  ],
  "location": "SearchStep.iShouldSeeTheSearchResultOn(String)"
});
formatter.result({
  "duration": 55171000,
  "status": "passed"
});
formatter.after({
  "duration": 834515200,
  "status": "passed"
});
});