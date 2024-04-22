import React from 'react';
import renderer from 'react-test-renderer';
import { screen, render, cleanup } from '@testing-library/react';
import { describe, expect, test, vi, afterEach } from 'vitest';
import userEvent from '@testing-library/user-event';
import DialogModal from './index';

describe('DialogModal', () => {
  afterEach(cleanup);

  test('DialogModal component renders correctly', () => {
    const component = renderer.create(<DialogModal openModal={true} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('The DialogModal is displayed with a message', () => {
    const component = renderer.create(
      <DialogModal openModal={true} message={'Test message !'} />
    );

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  test('closes DialogModal on escape key press', async () => {
    const mockSetOpenModal = vi.fn();
    render(
      <DialogModal
        openModal={true}
        setOpenModal={mockSetOpenModal}
        message={'It work !'}
      />
    );

    // The modal should be in the document initially
    expect(screen.getByText('It work !'));

    // Simulate pressing the Escape key
    await userEvent.keyboard('{Escape}');

    // Assert that setOpen was called with false, indicating the modal should close
    expect(mockSetOpenModal).toHaveBeenCalledWith(false);
  });
});
