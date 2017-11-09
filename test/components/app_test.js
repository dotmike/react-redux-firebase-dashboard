import { renderComponent , expect } from '../test_helper';
import RecipeList from '../../src/components/RecipeList';

describe('RecipeList' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(RecipeList);
  });

  it('renders something', () => {
    expect(component).to.exist;
  });
});
