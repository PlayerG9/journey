import './index.scss'
import { preProcessHtmlMarkdown } from '../../apiCalls/markdownPreProcessor'
import MarkdownHtmlViewer from '../../components/markdownHtmlViewer'
import { useEffect, useState } from 'react'


export default function TestPage(){
    var [value, setValue] = useState("")
    useEffect(() => {
        preProcessHtmlMarkdown(htmlStringV1, 'test-article')
            .then((v) => setValue(v))
    })
    
    return <>
        {/* <MarkdownHtmlViewer html={htmlString}/> */}
        <MarkdownHtmlViewer html={value}/>
    </>
}


const htmlStringV1 = `
<h1>
<a id="user-content-title" class="anchor" href="#title" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>Title</h1>
<div class="highlight highlight-source-python"><pre><span class="pl-k">import</span> <span class="pl-s1">codeblock</span>

<span class="pl-s1">codeblock</span>.<span class="pl-en">copy</span>()</pre></div>
<h2>
<a id="user-content-sub-title" class="anchor" href="#sub-title" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>sub-title</h2>
<p><a href="test-image.png" target="_blank" rel="noopener noreferrer"><img src="test-image.png" alt="image" style="max-width:100%;"></a></p>`


// const htmlStringV2 = `<h1>
// <a id="user-content-how-to-create-your-own-python-package" class="anchor" href="#how-to-create-your-own-python-package" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>How to create your own python-package</h1>
// <p>Assuming the following project-structure</p>
// <pre lang="txt"><code>root/
// ├─ my_package/
// │  ├─ __init__.py
// │  ├─ functionality.py
// ├─ testing.py
// </code></pre>
// <h2>
// <a id="user-content-my_package__init__py" class="anchor" href="#my_package__init__py" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a><code>my_package/__init__.py</code>
// </h2>
// <div class="highlight highlight-source-python"><pre><span class="pl-s">r"""</span>
// <span class="pl-s">here comes the description of the package</span>
// <span class="pl-s"></span>
// <span class="pl-s">eg. functionality and maybe an example code</span>
// <span class="pl-s"></span>
// <span class="pl-s">maybe the license</span>
// <span class="pl-s">"""</span>

// <span class="pl-s1">__author__</span> <span class="pl-c1">=</span> <span class="pl-s">"PlayerG9"</span>  <span class="pl-c"># your name</span>
// <span class="pl-s1">__copyright__</span> <span class="pl-c1">=</span> <span class="pl-s">"Copyright 2021, PlayerG9"</span>  <span class="pl-c"># your copyright</span>
// <span class="pl-s1">__credits__</span> <span class="pl-c1">=</span> [<span class="pl-s">"PlayerG9"</span>]  <span class="pl-c"># everyone that helped with this package</span>
// <span class="pl-s1">__license__</span> <span class="pl-c1">=</span> <span class="pl-s">"MIT"</span>  <span class="pl-c"># license</span>
// <span class="pl-s1">__version_info__</span> <span class="pl-c1">=</span> (<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>)  <span class="pl-c"># version-info as tuple (for easy version comparison)</span>
// <span class="pl-s1">__version__</span> <span class="pl-c1">=</span> <span class="pl-s">'.'</span>.<span class="pl-en">join</span>(<span class="pl-en">str</span>(<span class="pl-s1">_</span>) <span class="pl-k">for</span> <span class="pl-s1">_</span> <span class="pl-c1">in</span> <span class="pl-s1">__version_info__</span>)  <span class="pl-c"># version as string</span>
// <span class="pl-s1">__maintainer__</span> <span class="pl-c1">=</span> <span class="pl-s">"PlayerG9"</span>  <span class="pl-c"># current maintainer (if the owner changes)</span>
// <span class="pl-s1">__email__</span> <span class="pl-c1">=</span> <span class="pl-c1">None</span>  <span class="pl-c"># maintainer email</span>
// <span class="pl-s1">__status__</span> <span class="pl-c1">=</span> <span class="pl-s">"Prototype"</span>  <span class="pl-c"># Prototype, Development, Production</span>

// <span class="pl-c"># and now the import of important functions, variable or classes from your package</span>
// <span class="pl-k">from</span> .<span class="pl-s1">functionality</span> <span class="pl-k">import</span> <span class="pl-s1">my_function</span></pre></div>
// <h2>
// <a id="user-content-my_packagefunctionalitypy" class="anchor" href="#my_packagefunctionalitypy" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a><code>my_package/functionality.py</code>
// </h2>
// <div class="highlight highlight-source-python"><pre><span class="pl-s">r"""</span>
// <span class="pl-s">a description is always helpful for you file</span>
// <span class="pl-s"></span>
// <span class="pl-s">this way, if the other programmer import this file from your package</span>
// <span class="pl-s">(from my_package import functionality) and the uses help() on it</span>
// <span class="pl-s">he get's more information</span>
// <span class="pl-s">"""</span>

// <span class="pl-k">def</span> <span class="pl-en">my_function</span>():
//     <span class="pl-en">print</span>(<span class="pl-s">"Hello World"</span>)</pre></div>
// <h2>
// <a id="user-content-testingpy" class="anchor" href="#testingpy" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a><code>testing.py</code>
// </h2>
// <div class="highlight highlight-source-python"><pre><span class="pl-k">import</span> <span class="pl-s1">my_package</span>
// <span class="pl-s1">my_package</span>.<span class="pl-en">my_function</span>()</pre></div>
// <h1>
// <a id="user-content-all-package-attributes-for-copy-paste" class="anchor" href="#all-package-attributes-for-copy-paste" aria-hidden="true"><span aria-hidden="true" class="octicon octicon-link"></span></a>All Package Attributes for Copy-Paste</h1>
// <div class="highlight highlight-source-python"><pre><span class="pl-s1">__author__</span> <span class="pl-c1">=</span> <span class="pl-s">"NAME"</span>
// <span class="pl-s1">__copyright__</span> <span class="pl-c1">=</span> <span class="pl-s">"Copyright 2021, NAME"</span>
// <span class="pl-s1">__credits__</span> <span class="pl-c1">=</span> [<span class="pl-s">"NAME"</span>]
// <span class="pl-s1">__license__</span> <span class="pl-c1">=</span> <span class="pl-s">"LICENSE"</span>
// <span class="pl-s1">__version_info__</span> <span class="pl-c1">=</span> (<span class="pl-c1">0</span>, <span class="pl-c1">0</span>, <span class="pl-c1">0</span>)
// <span class="pl-s1">__version__</span> <span class="pl-c1">=</span> <span class="pl-s">'.'</span>.<span class="pl-en">join</span>(<span class="pl-en">str</span>(<span class="pl-s1">_</span>) <span class="pl-k">for</span> <span class="pl-s1">_</span> <span class="pl-c1">in</span> <span class="pl-s1">__version_info__</span>)
// <span class="pl-s1">__maintainer__</span> <span class="pl-c1">=</span> <span class="pl-s">"NAME"</span>
// <span class="pl-s1">__email__</span> <span class="pl-c1">=</span> <span class="pl-s">"NAME@provider.com"</span>
// <span class="pl-s1">__status__</span> <span class="pl-c1">=</span> <span class="pl-s">"Prototype"</span>  <span class="pl-c"># Prototype, Development, Production</span></pre></div>`