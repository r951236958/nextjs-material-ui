import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { Box, Typography, Container } from '@material-ui/core';

const TestCode = `function NumberList(props) {
    const numbers = props.numbers;
    return (
      <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />
        )}
      </ul>
    );
  }`;

function ListItem(props) {
  // 正確！你不需要在這裡指出 key：
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  return (
    <div>
      <ul>
        {/* 資料陣列.map((變數名稱) => {
        <JSX.....key={變數名稱.toString()} value={變數名稱}  />
        ))} */}
        {numbers.map((key) => (
          <ListItem key={key.toString()} value={key} />
        ))}
      </ul>

      <CodeTest />
    </div>
  );
}

const numbers = [1, 2, 3, 4, 5];

function CodeTest() {
  useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <div className="sourceCode">
      <Typography variant="h6">React 列表與Key</Typography>
      <Box my={2}>
        <pre>
          <code className="language-javascript">{TestCode}</code>
        </pre>
      </Box>
      <Container maxWidth="sm">
        <Typography variant="h4">React useState</Typography>
        <Typography component="div" gutterBottom>
          <Box my={4}>
            <Typography variant="h5">範例</Typography>
          </Box>
        </Typography>
        <div>
          <Typography variant="h5">程式碼</Typography>
          <NumberList numbers={numbers} />
        </div>
      </Container>
    </div>
  );
}

export default CodeTest;
