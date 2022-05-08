import React from 'react';

const Blogs = () => {
    return (
        <div className='container my-4'>
            {/* question - 1 */}
            <div className='bg-white p-4 rounded-3 shadow-lg'>
                <h5><strong>Question:</strong> What is the differences between JavaScript and Node.JS?</h5>
                <p>
                    <strong>Answer: </strong>
                    Differences between JavaScript and Node.JS is given below:
                    <table class="table table-bordered table-hover text-center mt-2">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">JavaScript</th>
                                <th scope="col">Node.JS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>JavaScript is a simple programming language that runs in any browser JavaScript Engine that means any browser which has JS engine is able to run JS code.</td>
                                <td>Node JS is an interpreter or Javascript runtime environment.</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Javascript can only be run in the browsers.</td>
                                <td>With the help of Node.JS, we can run Javascript outside of the browser.</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Javascript is mainly used for client side</td>
                                <td>Node.JS is mainly used for server side</td>
                            </tr>
                            <tr>
                                <th scope='row'>4</th>
                                <td>Javascript has the ability to add or remove HTML and can also play with DOM</td>
                                <td>Node.JS can not make any changes in HTML or DOM</td>
                            </tr>
                            <tr>
                                <th scope='row'>5</th>
                                <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                                <td>Some of the Nodejs modules are Lodash, express etc.</td>
                            </tr>
                        </tbody>
                    </table>
                </p>
            </div>

            <div className='bg-white p-4 rounded-3 shadow-lg my-4'>
                <h5><strong>Question:</strong> When should you use nodejs and when should you use mongodb?</h5>
                <p>
                    <strong>Answer: </strong>
                    <br />  Node.js is fast, lightweight and efficient. It uses the asynchronous mode of operation, event-driven Input/Output rather than using the traditional threads or separate threads for each process. Node.js is suited for applications that have a lot of concurrent connections and each request as it were needs exceptionally few CPU cycles, since the event loop (with all the other clients) is blocked amid execution of a function.
                    <br />
                    <br /><strong>On the other hand,</strong> MongoDB is a document database, also called a document-oriented database or a document store.
                    MongoDB are a suitable when-
                    <ul>
                        <li>your data is document-centric and doesn’t fit well into the schema of a relational database</li>
                        <li>you need to accommodate massive scale</li>
                        <li>you are rapidly prototyping, and a few other use cases</li>
                        <li>you need to integrating large amounts of diverse data</li>
                        <li>you need to delivering data in high-performance applications</li>
                    </ul>
                </p>
            </div>

            <div className='bg-white p-4 rounded-3 shadow-lg'>
                <h5><strong>Question:</strong> What is the differences between SQL and NoSQL?</h5>
                <p>
                    <strong>Answer: </strong>
                    Differences between SQL and NoSQL is given below:
                    <table class="table table-bordered table-hover text-center mt-2">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">SQL</th>
                                <th scope="col">NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>SQL databases also known as RDBMS are mainly relational database.</td>
                                <td>NoSQL databases are mainly non-relational or distributed databases</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>SQL is secure, support cross platfor and free to use.</td>
                                <td>NonSQL provides high performance, flexiability and it's also easy to use.</td>
                            </tr>

                            <tr>
                                <th scope='row'>3</th>
                                <td>SQL databases support Structured Query Languages.</td>
                                <td>NonSQL does not have any declarative query language.</td>
                            </tr>
                            <tr>
                                <th scope='row'>4</th>
                                <td>Supports table based data type. </td>
                                <td>Supports document oriented, graph databases, key value pair-based.</td>
                            </tr>

                            <tr>
                                <th scope='row'>5</th>
                                <td>SQL is best suitable for complex queries, multi-row transactions. </td>
                                <td>NoSQL is best suited for unstructured data or documents. Not ideal for complex queries.</td>
                            </tr>

                        </tbody>
                    </table>
                </p>
            </div>
        </div>
    );
};

export default Blogs;