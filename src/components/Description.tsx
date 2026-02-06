export default function Description() {
  return (
    <div className="UntypedBox__Wrapper-sc-4e7tnk-0 gnBbdH Floater-sc-vcx7dh-0 khmGRt TaskDescription__ThemedBox-sc-7m9k5q-0 yJaro">
      <div className="TaskDescription__ContentContainer-sc-7m9k5q-6 hlglqI">
        <div
          id="standard_task_description"
          className="TaskDescription__StandardTaskDescription-sc-7m9k5q-3 crhSKM protected standard-task-description"
        >
          <h2 className="mod-hidden">Task description</h2>
          <div className="TaskDescription__TaskContentWrapper-sc-7m9k5q-2 kDUwpJ task-description-content">
            <p>
              Your task is to implement a React component that renders a text
              input field with auto-completion.
            </p>
            <img
              alt="example input box with autocompleted drop down list"
              src="./demo.gif"
            />
            <h3>Requirements</h3>
            <ol>
              <li>
                In order to fetch items based on the current query, you should
                send a GET request to the mocked
                <code>/api/countries</code> endpoint. The endpoint requires a
                query parameter <code>q</code> that is meant to hold the query's
                value. The endpoint will fail if there will be no <code>q</code>{" "}
                query parameter provided.
              </li>
              <li>
                The component should render a <code>div</code> element that has
                the class name <code>wrapper</code>
                and two child elements: a <code>div</code> element with the
                class name <code>control</code> and a <code>div</code> element
                with the class name <code>list</code>. The <code>div</code>{" "}
                element with class name <code>control</code> should contain an
                input element with the class name <code>input</code>, and this
                is the input in which the user enters a query.
              </li>
              <li>
                Once a response comes from the API, all strings from the
                response should be displayed inside the <code>div</code> tag
                with class name <code>list</code>, each one inside a separate{" "}
                <code>a</code> element with the class name{" "}
                <code>list-item</code>. The strings should be displayed in the
                same order as they arrived in from the API.
              </li>
              <li>
                You should avoid sending too many requests to the API; in
                particular, do not send requests on every single keypress! You
                are expected to properly <strong>debounce</strong> the requests.
                The debounce time-out should be <strong>500</strong>{" "}
                milliseconds.
              </li>
              <li>
                When items are being fetched, a class name{" "}
                <code>is-loading</code> should be added to the input's wrapper
                (the element with class name <code>control</code>).
              </li>
              <li>
                When items are being fetched, no request has been sent or the
                endpoint has returned zero items, the <code>div</code> element
                with class name <code>list</code> should not be rendered.
              </li>
              <li>
                The component accepts the prop{" "}
                <code>onSelectItem: (item: string) =&gt; void</code>, which
                should be called with an item when the user clicks on it.
                Clicking on an item does not have any effect apart from calling
                the callback.
              </li>
              <li>
                The component should be the default export and can be either a
                function or a class.
              </li>
            </ol>
            <h3>Assumptions</h3>
            <ul>
              <li>
                The API service is a mocked service - it can be accessed only in
                the CodeSandbox UI.
              </li>
              <li>
                The mocked endpoint <code>/api/countries</code> returns an array
                of strings. The array's length is at most <strong>10</strong>.
              </li>
              <li>
                Assume that a request sent to the mocked endpoint{" "}
                <code>/api/countries</code> never fails when provided a{" "}
                <code>q</code> query parameter.
              </li>
              <li>
                The following imports are allowed:
                <ul>
                  <li>
                    <code>react</code>
                  </li>
                  <li>
                    <code>classnames</code>,
                  </li>
                  <li>
                    <code>lodash</code> ,
                  </li>
                  <li>
                    <code>axios</code> .
                  </li>
                </ul>
              </li>
              <li>
                Use <code>console.log</code> and <code>console.error</code> for
                debugging purposes via your browser's developer tools.
              </li>
              <li>
                <strong>
                  When using Axios you are expected to use <code>params</code>{" "}
                  argument and not build the URL by hand (
                  <a href="https://github.com/axios/axios#request-config">
                    documentation
                  </a>
                  )
                </strong>
              </li>
            </ul>
            <h3>Additional examples</h3>
            <h4>Example 1</h4>
            <p>Let's consider the following sequence of actions:</p>
            <ul>
              <li>The user types "q" into the input;</li>
              <li>
                After 50 ms the user presses "u", and then again, after every 50
                ms, a new character is inserted until the input value is
                "query";
              </li>
              <li>
                Only one request to the API is sent, exactly 500 ms after "y" is
                inputted;
              </li>
              <li>
                During this period (from pressing "y" until the response comes
                in), the class name <code>is-loading</code>
                is added to the input's wrapper.
              </li>
            </ul>
            <h4>Example 2</h4>
            <p>If the response from the API endpoint is:</p>
            <pre>
              <code className="language-json">
                ["Italy", "Spain", "Portugal", "Macedonia"]
              </code>
            </pre>
            <p>then the list section, which is rendered as follows:</p>
            <pre>
              <code className="language-html">
                &lt;div className="list"&gt; &lt;a
                className="list-item"&gt;Italy&lt;/a&gt; &lt;a
                className="list-item"&gt;Spain&lt;/a&gt; &lt;a
                className="list-item"&gt;Portugal&lt;/a&gt; &lt;a
                className="list-item"&gt;Macedonia&lt;/a&gt; &lt;/div&gt;
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
