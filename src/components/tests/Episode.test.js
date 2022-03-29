import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Episode from './../Episode';

const testEpisode = {
    id:1,
    name: "",
    image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vulture.com%2F2017%2F08%2Fthe-duffer-brothers-upside-down-journey-to-stranger-things.html&psig=AOvVaw2xbAe_Lde7MZxIK5mqEM7F&ust=1648594683961000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCMCUz4T06fYCFQAAAAAdAAAAABAD",
    season: 1,
    number: 1,
    summary: "",
    runtime: 1
}
const test EpisodeWithoutImage = {
    //Add in appropriate test data structure here
}
test("renders without error", () => {
    render(<Episode episode={testEpisode}/>);
});
    
test("renders the summary test passed as prop", () => { 
    render
});

test("renders default image when image is not defined", () => { });
