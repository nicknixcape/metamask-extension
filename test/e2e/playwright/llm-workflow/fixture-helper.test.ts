import FixtureBuilderV2 from '../../fixtures/fixture-builder-v2';
import { buildDefaultFixture } from './fixture-helper';

jest.mock('../../fixtures/fixture-builder-v2');

describe('buildDefaultFixture', () => {
  it('disables sync before building the default fixture', () => {
    const build = jest.fn().mockReturnValue({});
    const withSyncDisabled = jest.fn().mockReturnValue({ build });

    jest.mocked(FixtureBuilderV2).mockImplementation(
      () =>
        ({
          withSyncDisabled,
        }) as unknown as FixtureBuilderV2,
    );

    expect(buildDefaultFixture()).toEqual({});
    expect(withSyncDisabled).toHaveBeenCalledTimes(1);
    expect(build).toHaveBeenCalledTimes(1);
  });
});
