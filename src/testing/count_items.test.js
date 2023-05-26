/**
 * @jest-environment jsdom
 */

import countItems from '../modules/count_items.js';

describe('we are going to tesk if counter is able to count how many items we have', () => {
  beforeEach(() => {
    document.body.innerHTML = `
    <div class="items-container">
      <div class="card card-item text-center">
      <div class="card card-item text-center">
      <div class="card card-item text-center">
    </div> 
    `;
  });

  afterEach(() => {
    document.body.innerHTML = `
      <div class="items-container">
      </div>
    `;
  });

  test('it should return 3 as items', () => {
    expect(countItems()).toBe(3);
  });

  test('it should return 0 as items where there are no items', () => {
    document.body.innerHTML = `
      <div class="items-container">
      </div>
    `;
    expect(countItems()).toBe(0);
  });
});
