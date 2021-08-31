"use strict";(self.webpackChunkmodrinth_doc=self.webpackChunkmodrinth_doc||[]).push([[87],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return c}});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var d=o.createContext({}),s=function(e){var n=o.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return o.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),c=a,h=m["".concat(d,".").concat(c)]||m[c]||u[c]||r;return t?o.createElement(h,i(i({ref:n},p),{},{components:t})):o.createElement(h,i({ref:n},p))}));function c(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=m;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<r;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7467:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return p},default:function(){return m}});var o=t(7462),a=t(3366),r=(t(7294),t(3905)),i=["components"],l={title:"Using Modrinth's Maven repository"},d="Using Modrinth's Maven repository",s={unversionedId:"tutorials/maven",id:"tutorials/maven",isDocsHomePage:!1,title:"Using Modrinth's Maven repository",description:'All projects uploaded to Modrinth are automatically placed on a Maven repository (henceforth "the Maven"). This can be used for a variation of reasons, in tandem with a JVM build automation tool such as Gradle. This tool will not be of any use to an everyday user, but can be very useful for mod or plugin developers.',source:"@site/docs/tutorials/maven.md",sourceDirName:"tutorials",slug:"/tutorials/maven",permalink:"/docs/tutorials/maven",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/tutorials/maven.md",version:"current",frontMatter:{title:"Using Modrinth's Maven repository"},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Creating Modpacks",permalink:"/docs/modpacks/creating_modpacks"}},p=[{value:"TL;DR",id:"tldr",children:[]},{value:"Adding the repository",id:"adding-the-repository",children:[]},{value:"Resolving dependencies",id:"resolving-dependencies",children:[]},{value:"Dependency scope",id:"dependency-scope",children:[]},{value:"End result",id:"end-result",children:[]},{value:"Appendix: uploading sources &amp; Javadoc",id:"appendix-uploading-sources--javadoc",children:[]}],u={toc:p};function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-modrinths-maven-repository"},"Using Modrinth's Maven repository"),(0,r.kt)("p",null,'All projects uploaded to Modrinth are automatically placed on a Maven repository (henceforth "the Maven"). This can be used for a variation of reasons, in tandem with a JVM build automation tool such as ',(0,r.kt)("a",{parentName:"p",href:"https://gradle.org/"},"Gradle"),". This tool will not be of any use to an everyday user, but can be very useful for mod or plugin developers."),(0,r.kt)("p",null,"Gradle is the most common build automation tool used for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FabricMC/fabric-loom"},"Fabric")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MinecraftForge/ForgeGradle"},"Forge")," mods, and thus, this guide will focus mostly on Gradle; however, this guide can be adapted to be used with Apache Maven (e.g. some Bukkit plugins) or any other build automation tool that supports Maven repositories."),(0,r.kt)("h2",{id:"tldr"},"TL;DR"),(0,r.kt)("p",null,"If you just want a quick rundown of how to add a dependency from the Maven, here's a ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle")," snippet:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n    maven {\n        name = "Modrinth"\n        url = "https://api.modrinth.com/maven"\n        content {\n            includeGroup "maven.modrinth"\n        }\n    }\n}\n\ndependencies {\n    modImplementation "maven.modrinth:sodium:mc1.17.1-0.3.2"\n}\n')),(0,r.kt)("p",null,"To learn what each part of this is and how to use it more extensively, read on!"),(0,r.kt)("h2",{id:"adding-the-repository"},"Adding the repository"),(0,r.kt)("p",null,"The Maven is located at ",(0,r.kt)("inlineCode",{parentName:"p"},"https://api.modrinth.com/maven"),". To add it to a development environment, it must be added to your ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle(.kts)")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"repositories")," block. For example, this is how it might look with the standard Groovy DSL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n    // ...\n    maven {\n        url = "https://api.modrinth.com/maven"\n    }\n}\n')),(0,r.kt)("p",null,"Optionally, you may also add a repository name by adding ",(0,r.kt)("inlineCode",{parentName:"p"},'name = "Modrinth"')," before the ",(0,r.kt)("inlineCode",{parentName:"p"},"url"),". This may help debug logs be easier to read."),(0,r.kt)("p",null,"Additionally, if you're using Gradle 5 or above, it is recommended that you add a ",(0,r.kt)("inlineCode",{parentName:"p"},"content includeGroup")," field. The Maven group that Modrinth uses in the repository is unique (",(0,r.kt)("inlineCode",{parentName:"p"},"maven.modrinth"),") and won't be used anywhere else, so specifying that this group should only be resolved to our Maven will allow it to resolve artifacts faster."),(0,r.kt)("p",null,"All in all, here's what an optimal ",(0,r.kt)("inlineCode",{parentName:"p"},"repositories")," block with the Modrinth Maven repository might look like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n    // ...\n    maven {\n        name = "Modrinth"\n        url = "https://api.modrinth.com/maven"\n        content {\n            includeGroup "maven.modrinth"\n        }\n    }\n}\n')),(0,r.kt)("h2",{id:"resolving-dependencies"},"Resolving dependencies"),(0,r.kt)("p",null,"Once added to the repositories block, resolving dependencies from the Maven is fairly simple. Syntactically, it is made up of three parts, just like every Maven artifact:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Maven group:")," The Maven group for all artifacts on the Maven will always be ",(0,r.kt)("inlineCode",{parentName:"li"},"maven.modrinth"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Archive name:")," The archive name will be the slug/vanity URL or project ID of the project in question.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, for the mod Sodium, this can be either ",(0,r.kt)("inlineCode",{parentName:"li"},"sodium")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"AANobbMI"),"; either will work."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Version:")," The version will be the version number specifically. This can be found on the version page itself, or it can be found in the ",(0,r.kt)("inlineCode",{parentName:"li"},"maven-metadata.xml")," if you know how to navigate there.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"For example, for the version of Sodium released on 2021-08-29, this is ",(0,r.kt)("inlineCode",{parentName:"li"},"mc1.17.1-0.3.2"),". NOTE: the version ID will ",(0,r.kt)("strong",{parentName:"li"},"not")," work here, unlike with the archive name.")))),(0,r.kt)("p",null,"Once you put these together and separate them with colons, you will get something similar to ",(0,r.kt)("inlineCode",{parentName:"p"},"maven.modrinth:sodium:mc1.17.1-0.3.2"),". This is the full classpath of the dependency. You can put this classpath into the ",(0,r.kt)("inlineCode",{parentName:"p"},"dependencies")," block in your ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle(.kts)"),", prefaced with a scope."),(0,r.kt)("h2",{id:"dependency-scope"},"Dependency scope"),(0,r.kt)("p",null,"In terms of what actions are available to you, this will depend upon which Gradle plugin you are using. With ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/FabricMC/fabric-loom"},"Fabric Loom"),", to add a mod to the development environment itself, you'll want to use ",(0,r.kt)("inlineCode",{parentName:"p"},"modImplementation"),". If you want to simply have the classes available in your IDE, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"modApi"),". If you want to jar-in-jar the other mod within your mod, use ",(0,r.kt)("inlineCode",{parentName:"p"},"include")," (note: this should only be used for smaller libraries)."),(0,r.kt)("p",null,"With ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MinecraftForge/ForgeGradle"},"ForgeGradle"),", you can use the standard ",(0,r.kt)("inlineCode",{parentName:"p"},"implementation")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"api")," to add it to a development environment and to load the classes, respectively. To have it decompiled by ForgeGradle, add the ",(0,r.kt)("inlineCode",{parentName:"p"},"fg.deobf")," scope as well."),(0,r.kt)("h2",{id:"end-result"},"End result"),(0,r.kt)("p",null,"In the end, your ",(0,r.kt)("inlineCode",{parentName:"p"},"build.gradle(.kts)")," file might look a little something like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-groovy"},'repositories {\n    // Other Maven repositories can go above (or below) Modrinth\'s. We don\'t need priority :)\n    // Do remember, though, this is the `repositories` block below where plugins are declared, not in `pluginManagement`!\n    maven {\n        name = "Modrinth"\n        url = "https://api.modrinth.com/maven"\n        content {\n            includeGroup "maven.modrinth"\n        }\n    }\n}\n\ndependencies {\n    // Adding a mod as an API to a Fabric development environment\n    modApi "maven.modrinth:sodium:mc1.17.1-0.3.2"\n    \n    // Adding a mod to a Forge development environment and decompiling it using FG\n    implementation fg.deobf("maven.modrinth:terra:forge-5.3.3-BETA+ec3b0e5d")\n    \n    // Adding a mod to a Fabric development environment and JiJing it within yours\n    modImplementation include("maven.modrinth:trinkets:3.0.3")\n}\n')),(0,r.kt)("p",null,"That's it. Have fun!"),(0,r.kt)("h2",{id:"appendix-uploading-sources--javadoc"},"Appendix: uploading sources & Javadoc"),(0,r.kt)("p",null,"As long as they are named with the correct suffixes when uploaded, sources and Javadoc (and similar other special jars) will also be detected and be downloadable by Gradle/IDEs. However, they ",(0,r.kt)("strong",{parentName:"p"},"must not")," be the primary file; for everything to work well (not just Maven-wise), the non-suffixed jar should be the primary file."),(0,r.kt)("p",null,"For example, if all of your mod jars start with ",(0,r.kt)("inlineCode",{parentName:"p"},"mymod-1.0.0+1.17"),", if ",(0,r.kt)("inlineCode",{parentName:"p"},"mymod-1.0.0+1.17.jar")," is the primary file, ",(0,r.kt)("inlineCode",{parentName:"p"},"mymod-1.0.0+1.17-sources.jar"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"mymod-1.0.0+1.17-javadoc.jar"),", and other similar jars will be recognized and downloadable through the Maven."))}m.isMDXComponent=!0}}]);