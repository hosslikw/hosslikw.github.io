// run-stylelint.mjs
import '@isnotdefined/stylelint-plugin';
import stylelint from 'stylelint';

stylelint.lint({
    files: 'css/**/*.css', // Adjust the path as necessary
    // other Stylelint options
}).then(result => {
    result.results.forEach(fileResult => {
        console.log(`File: ${fileResult.source}`);
        fileResult.warnings.forEach(warning => {
            console.log(`Line ${warning.line}, Column ${warning.column}: ${warning.text}`);
        });
    });

    if (result.errored) {
        process.exit(1);
    }
}).catch(err => {
    console.error(err);
    process.exit(1);
});
