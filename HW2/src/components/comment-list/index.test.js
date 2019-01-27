import React from 'react'
import Enzyme, { mount, render, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

import CommentListWithDecorator, {CommentList} from './index'
import articles from '../../fixtures'

Enzyme.configure({ adapter: new Adapter() });

describe('CommentList', () => {
    it('should render comment list', () => {
        const container = mount(
          <CommentList comments={articles[0].comments} isOpen={true} />
        )

        expect(container.find('.test__comment-list--item').length).toEqual(
          articles[0].comments.length 
        )
    })

    it('should render closed comments by default', () => {
      const container = render(<CommentListWithDecorator comments={articles[0].comments} />)
  
      expect(container.find('.test__comment--body').length).toEqual(0)
    })

    it('should open an comments on click', () => {
      const container = mount(<CommentListWithDecorator comments={articles[0].comments} />)
  
      container
        .find('.test__comment--btn')
        .at(0)
        .simulate('click')
  
      expect(container.find('.test__comment--body').length).toEqual(articles[0].comments.length)
    })

    it('should trigger data fetching on mount', (done) => {
      mount(
        <CommentListWithDecorator
          commments={[]}
          fetchData={done}
        />
      )
    })

})