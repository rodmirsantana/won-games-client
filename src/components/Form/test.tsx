import { renderWithTheme } from 'utils/tests/helpers'

import { FormLink, FormWrapper } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="">link</a>
        </FormLink>
      </FormWrapper>
    )

    // expect(container.parentElement).toMatchSnapshot()
  })
})
