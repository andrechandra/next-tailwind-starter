module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // new feature
        'fix', // bug fix
        'docs', // documentation
        'style', // formatting, missing semi colons, etc
        'refactor', // refactoring code
        'test', // adding tests
        'chore', // maintenance tasks
        'perf', // performance improvements
        'ci', // continuous integration
        'build', // build system changes
        'revert', // revert a commit
      ],
    ],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'subject-case': [2, 'always', 'lower-case'],
  },
}
