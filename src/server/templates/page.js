'use strict';

export default function pageLayout (content, script, style) {
  return `
    <html>
    <head>
      <link rel="stylesheet" href="${style}"/>
    </head>
    <body>
      ${content}
      <script src="${script}"></script>
    </body>
   </html>
  `;
}