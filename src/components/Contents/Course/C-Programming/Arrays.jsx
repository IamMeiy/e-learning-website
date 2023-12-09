import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import '../Styles/C.css';

const Arrays = () => {
  const codeString = `#include <stdio.h>

int main() {
    int numbers[5] = {1, 2, 3, 4, 5};

    for (int i = 0; i < 5; i++) {
        printf("Element at index %d: %d\\n", i, numbers[i]);
    }

    return 0;
}`;

  return (
    <div className="section">
      <h2 className="heading">Arrays in C</h2>
      <p className="paragraph">
        An array is a collection of elements of the same type stored in contiguous memory locations. In the example above, it declares an integer array `numbers` and prints its elements using a `for` loop.
      </p>
      <SyntaxHighlighter language="c" style={a11yDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};


export default Arrays;
