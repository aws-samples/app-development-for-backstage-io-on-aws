"use strict";(self.webpackChunk_aws_opa_on_aws_website=self.webpackChunk_aws_opa_on_aws_website||[]).push([[7867],{41943:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=t(74848),i=t(28453);const o={sidebar_position:3},r="Interacting With Your Application",a={id:"techdocs/runtimes/generative-ai/interactingWithApp",title:"Interacting With Your Application",description:"To interact with the backend of the application, you need to do so in the following order:",source:"@site/docs/techdocs/runtimes/generative-ai/interactingWithApp.md",sourceDirName:"techdocs/runtimes/generative-ai",slug:"/techdocs/runtimes/generative-ai/interactingWithApp",permalink:"/docs/techdocs/runtimes/generative-ai/interactingWithApp",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Deploying Your Application",permalink:"/docs/techdocs/runtimes/generative-ai/deployingYourApp"},next:{title:"Getting Started With An Example",permalink:"/docs/techdocs/runtimes/generative-ai/gettingStartedWithExample"}},l={},c=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"<strong>Step 1: Set Configuration Parameters</strong>",id:"step-1-set-configuration-parameters",level:3},{value:"Step 2: Upload Contextual Documents",id:"context",level:3},{value:"Step 3: Testing [OPTIONAL]",id:"classification",level:3},{value:"Step 4: Asking the ChatBot a Question",id:"step-4-asking-the-chatbot-a-question",level:3}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"interacting-with-your-application",children:"Interacting With Your Application"}),"\n",(0,s.jsx)(n.p,{children:"To interact with the backend of the application, you need to do so in the following order:"}),"\n",(0,s.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Before interacting with your application, you will need to enable certain Bedrock models in your AWS Account."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Navigate to Amazon Bedrock Service in your AWS Console."}),"\n",(0,s.jsxs)(n.li,{children:["On the left-hand pane, find ",(0,s.jsx)(n.em,{children:"Model Access"})," and select ",(0,s.jsx)(n.em,{children:"Manage model access"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Request access for ",(0,s.jsx)(n.code,{children:"Amazon Titan Embeddings"})," and ",(0,s.jsx)(n.code,{children:"Anthropic Claude"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"step-1-set-configuration-parameters",children:(0,s.jsx)(n.strong,{children:"Step 1: Set Configuration Parameters"})}),"\n",(0,s.jsx)(n.p,{children:"Once the application is successfully deployed, data scientists can set their custom parameters for the solution."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Find the link to your API in the Application's entity page on the OPA website under ",(0,s.jsx)(n.em,{children:"Links"}),". Use the API Platform of your choice or the Amazon API Gateway Console to make your API request. ",(0,s.jsx)(n.em,{children:"Be sure to add the /setConfiguration to the URI"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Sample request bodies can be found in ",(0,s.jsx)(n.code,{children:"./events/set-configuration.json"}),". of the application source code repo. The following parameters can be customized for your solution:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"response_prompt"})," ",(0,s.jsx)(n.em,{children:"(string)"}),": Used in the ",(0,s.jsx)(n.strong,{children:"Response Lambda,"})," it sets up the context for the Claude model to create an answer. For proper response generation you need to format the prompt using                 ",(0,s.jsx)(n.code,{children:'"{question}"'}),",  and ",(0,s.jsx)(n.code,{children:"<document></document> XML tags:{documents} "}),"  . This will serve as placeholders for the questions asked and the documents that will be use to answer it.  (More information can be found in ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/bedrock/latest/userguide/general-guidelines-for-bedrock-users.html",children:"Prompt Guidelines"}),")"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"temperature"})," ",(0,s.jsx)(n.em,{children:"(integer)"}),": Used in the ",(0,s.jsx)(n.strong,{children:"Response Lambda"}),", established the amount of randomness injected into the response. Defaults to 1. Ranges from 0 to 1. Use temp closer to 0 for analytical / multiple choice, and closer to 1 for creative and generative tasks."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"topics"})," ",(0,s.jsx)(n.em,{children:"(string)"}),": Used in the ",(0,s.jsx)(n.strong,{children:"Classification Lambda"}),", you ",(0,s.jsx)(n.strong,{children:"must"})," pass a list of indices that will reflect those created in OpenSearch. These will also match the high-level folder structure that you created in you S3 Data Bucket. For example: [ \u201capple\u201d, \u201cgoogle\u201d, \u201ctesla\u201d]. See ",(0,s.jsx)(n.a,{href:"#context",children:"Step 2: Upload Contextual Documents"})," for more information."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"max_tokens_to_sample"})," ",(0,s.jsx)(n.em,{children:"(integer)"}),": Used in the ",(0,s.jsx)(n.strong,{children:"Response Lambda,"})," the maximum number of tokens to generate before stopping. We recommend a limit of 4,000 tokens for optimal performance. Note that Anthropic Claude models might stop generating tokens before reaching the set value."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"chunk_size"})," ",(0,s.jsx)(n.em,{children:"(integer)"}),": Used in ",(0,s.jsx)(n.strong,{children:"Index Lambda,"})," it sets the maximum number of characters in each chunk of text after splitting. This parameter must be set before documents are indexed. If modified after indexing, the documents will need to be re-indexed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"chunk_overlap"})," ",(0,s.jsx)(n.em,{children:"(integer)"}),":  Used in ",(0,s.jsx)(n.strong,{children:"Index Lambda,"})," determines the amount of overlap between consecutive text chunks, allowing you to control the continuity of context in the generated segments during the splitting process. This parameter must be set before documents are indexed. If modified after indexing, the documents will need to be re-indexed."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"relevant_document_count"})," ",(0,s.jsx)(n.em,{children:"(integer)"}),": Used in the ",(0,s.jsx)(n.strong,{children:"Retrieval Lambda,"})," it will determine the max number of documents to be retrieved from OpenSearch."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["NOTE: Parameter values are configured with default values at the time of resource deployment. All parameters can be used in their default state EXCEPT for ",(0,s.jsx)(n.code,{children:"topics"}),". This parameter must be configured to meet the requirements specified above and in ",(0,s.jsx)(n.a,{href:"#context",children:"Step 2: Upload Contextual Documents"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"context",children:"Step 2: Upload Contextual Documents"}),"\n",(0,s.jsx)(n.p,{children:"Once your parameters are set, upload relevant documents to the S3 Data Bucket."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Find the name of your DATA BUCKET"}),". This bucket can be found on the Entity Page of your application, under AWS Infrastructure Resources, listed as an S3 bucket."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Create folders inside the bucket corresponding to the names you want your indices to have."})," This should be something relevant to the documents that will be included in them. For example, a folder labeled \u201camazon\u201d will contain only documents written about Amazon. These  folders will match the list of ",(0,s.jsx)(n.em,{children:"topics"})," you set in your parameters."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Upload your files to their respective folder"}),". This must be a .txt file."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Wait for your indices to be created."})," Adding an object to your bucket will trigger the ",(0,s.jsx)(n.strong,{children:"Indexer Lambda"})," function. You can track the progress of this in the Indexer Lambda\u2019s CloudWatch Logs or verify that the number of indices in OpenSearch increased. Depending on the number and size of the files you upload, this process will take around 1-3 min."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"classification",children:"Step 3: Testing [OPTIONAL]"}),"\n",(0,s.jsx)(n.p,{children:"Once the parameters are set and the documents are uploaded, you are ready to begin asking questions and testing your solution."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["NOTE: Each Lambda function is fronted by its own API method. However, the Classification Lambda has the ability to call the Retriever and Response, which will ultimately return to you your final answer with just one API call. You can control this feature through the ",(0,s.jsx)(n.code,{children:"/classification"})," API call."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.code,{children:"operation_mode"})," ="]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"inclusive"}),", then the Classifier will call the Retriever and Response and return the ",(0,s.jsx)(n.strong,{children:"final message"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"exclusive"}),", the request will only hit the Classifier and return the ",(0,s.jsx)(n.code,{children:"message"})," and ",(0,s.jsx)(n.code,{children:"index"})," fields. ",(0,s.jsx)(n.em,{children:"Use this for isolated testing"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"/classification"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "message": "Ask your question to the Chatbot here!",\n    "operation_mode": "exclusive"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"The response from the /classification will be used as the request for your /retrieval The input will look something like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"/retrieval"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "message": "The same question used in the request above will be used here.",\n    "index": "An index from your OpenSearch Collection"\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"The response from the /retrieval will be used as the request for your /response. The input will look something like this:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"/response"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "message": "The same question used in the request above will be used here.",\n    "response": [\n            {\n                "page_content": "An extensive string containing relevant document context..."\n            }\n    ]\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The response from the /response will be a string containing the ",(0,s.jsx)(n.strong,{children:"final answer"})," to your initial question."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["These events can also be found in the ",(0,s.jsx)(n.code,{children:"./events"})," folder of your application's source code repository."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"step-4-asking-the-chatbot-a-question",children:"Step 4: Asking the ChatBot a Question"}),"\n",(0,s.jsxs)(n.p,{children:["Now your end users are ready to ask a question. Simply make an API call to the Classfication API method using the request format illustrated in the ",(0,s.jsx)(n.a,{href:"#classification",children:"Step 3: Testing /classification"})," section above. This sample event can also be found in ",(0,s.jsx)(n.code,{children:"./events/classification"}),":"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"/classification"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "message": "Ask your question to the Chatbot here!",\n    "operation_mode": "inclusive"\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const i={},o=s.createContext(i);function r(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);