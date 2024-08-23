'use client'

import { useState } from "react";

// ================ FILE EXPLORER ====================
//
// Tasks:
//  * Display the file system structure provided below.
//  * Implement toggle functionality to expand/collapse folders.
//  * Folders should show their contents when expanded and hide them when collapsed.
//  * Files should simply be displayed as list items.
//  * Add basic styling to differentiate between files and folders.

const fileTree = {
  name: 'root',
  children: [
    {
      name: 'src',
      children: [
        { name: 'index.js' },
        { name: 'App.js' },
        {
          name: 'components',
          children: [
            { name: 'Header.js' },
            { name: 'Footer.js' },
          ],
        },
      ],
    },
    {
      name: 'public',
      children: [
        { name: 'index.html' },
        { name: 'favicon.ico' },
      ],
    },
    { name: 'package.json' },
  ],
};

function RenderFileSystem({ files }) {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div className="p">
      <div className="flex" onClick={() => setIsCollapsed(oldValue => !oldValue)}>
        {files.children && <span> {isCollapsed ? '+' : '-'}</span>}
        {files.name}
      </div>
      <div>
        {!isCollapsed && files?.children?.map(file => (
          <div className="flex">
            {files.children && <span className="px-2 py-0 leading-5 text-xl">|</span>}
            <RenderFileSystem files={file} />
          </div>
        ))
        }
      </div>
    </div>
  )
}

export default function FileExplorer() {
  return (
    <section>
      <RenderFileSystem files={fileTree} />
    </section>
  )
}
