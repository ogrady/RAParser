./node_modules/nearley/bin/nearleyc.js 'ra.ne' > 'ra.js'
while read line; do
    echo $line;
    echo $line | ./node_modules/nearley/bin/nearley-test.js ra.js;
done < 'test-input.txt'