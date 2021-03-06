const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4.js');
const inputValues4andClick = require ('../../helpers/inputValues4andClick.js');

describe('Checking the main functionality ', function () {

    describe('Happy path', function () {

        it('TC-021 Create button is clickable after 1-4 are filled in with function', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4(data.name, data.gender.she, data.age, data.storyType.Comedy);
            const create = $(sel.create).isEnabled();
            expect(create).toEqual(true);
        });
    });

    describe('Other paths', function () {

        it('TC-022 gender he is working', function () {
            browser.url('https://qa-apps.netlify.app/app_my_hero');
            inputValues4andClick(data.name, data.gender.he, data.age, data.storyType.Comedy);
            const btn = $(sel.tryAgain).isDisplayed();
            expect(btn).toEqual(true);
        });
    });
});


    