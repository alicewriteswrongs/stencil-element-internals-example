import { newSpecPage } from '@stencil/core/testing';
import { CustomTextInput } from './custom-text-input';

describe('custom-text-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CustomTextInput],
      html: `<custom-text-input></custom-text-input>`,
    });
    expect(page.root).toEqualHtml(`
      <foo-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </foo-bar>
    `);
  });
});
