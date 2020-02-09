export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** 
 * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
 */
  Date: any,
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any,
};











export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>,
  ne?: Maybe<Scalars['Boolean']>,
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>,
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>,
  ne?: Maybe<Scalars['Date']>,
  gt?: Maybe<Scalars['Date']>,
  gte?: Maybe<Scalars['Date']>,
  lt?: Maybe<Scalars['Date']>,
  lte?: Maybe<Scalars['Date']>,
  in?: Maybe<Array<Maybe<Scalars['Date']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>,
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<DirectoryGroupConnection>,
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: DirectoryFieldsEnum
};

export type DirectoryEdge = {
  next?: Maybe<Directory>,
  node: Directory,
  previous?: Maybe<Directory>,
};

export type DirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<DirectoryEdge>,
  nodes: Array<Directory>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type DuotoneGradient = {
  highlight: Scalars['String'],
  shadow: Scalars['String'],
  opacity?: Maybe<Scalars['Int']>,
};

export type File = Node & {
  sourceInstanceName: Scalars['String'],
  absolutePath: Scalars['String'],
  relativePath: Scalars['String'],
  extension: Scalars['String'],
  size: Scalars['Int'],
  prettySize: Scalars['String'],
  modifiedTime: Scalars['Date'],
  accessTime: Scalars['Date'],
  changeTime: Scalars['Date'],
  birthTime: Scalars['Date'],
  root: Scalars['String'],
  dir: Scalars['String'],
  base: Scalars['String'],
  ext: Scalars['String'],
  name: Scalars['String'],
  relativeDirectory: Scalars['String'],
  dev: Scalars['Int'],
  mode: Scalars['Int'],
  nlink: Scalars['Int'],
  uid: Scalars['Int'],
  gid: Scalars['Int'],
  rdev: Scalars['Int'],
  ino: Scalars['Float'],
  atimeMs: Scalars['Float'],
  mtimeMs: Scalars['Float'],
  ctimeMs: Scalars['Float'],
  atime: Scalars['Date'],
  mtime: Scalars['Date'],
  ctime: Scalars['Date'],
  birthtime?: Maybe<Scalars['Date']>,
  birthtimeMs?: Maybe<Scalars['Float']>,
  blksize?: Maybe<Scalars['Int']>,
  blocks?: Maybe<Scalars['Int']>,
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>,
  childImageSharp?: Maybe<ImageSharp>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type FileConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<FileGroupConnection>,
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: FileFieldsEnum
};

export type FileEdge = {
  next?: Maybe<File>,
  node: File,
  previous?: Maybe<File>,
};

export type FileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'publicURL' |
  'childImageSharp___fixed___base64' |
  'childImageSharp___fixed___tracedSVG' |
  'childImageSharp___fixed___aspectRatio' |
  'childImageSharp___fixed___width' |
  'childImageSharp___fixed___height' |
  'childImageSharp___fixed___src' |
  'childImageSharp___fixed___srcSet' |
  'childImageSharp___fixed___srcWebp' |
  'childImageSharp___fixed___srcSetWebp' |
  'childImageSharp___fixed___originalName' |
  'childImageSharp___resolutions___base64' |
  'childImageSharp___resolutions___tracedSVG' |
  'childImageSharp___resolutions___aspectRatio' |
  'childImageSharp___resolutions___width' |
  'childImageSharp___resolutions___height' |
  'childImageSharp___resolutions___src' |
  'childImageSharp___resolutions___srcSet' |
  'childImageSharp___resolutions___srcWebp' |
  'childImageSharp___resolutions___srcSetWebp' |
  'childImageSharp___resolutions___originalName' |
  'childImageSharp___fluid___base64' |
  'childImageSharp___fluid___tracedSVG' |
  'childImageSharp___fluid___aspectRatio' |
  'childImageSharp___fluid___src' |
  'childImageSharp___fluid___srcSet' |
  'childImageSharp___fluid___srcWebp' |
  'childImageSharp___fluid___srcSetWebp' |
  'childImageSharp___fluid___sizes' |
  'childImageSharp___fluid___originalImg' |
  'childImageSharp___fluid___originalName' |
  'childImageSharp___fluid___presentationWidth' |
  'childImageSharp___fluid___presentationHeight' |
  'childImageSharp___sizes___base64' |
  'childImageSharp___sizes___tracedSVG' |
  'childImageSharp___sizes___aspectRatio' |
  'childImageSharp___sizes___src' |
  'childImageSharp___sizes___srcSet' |
  'childImageSharp___sizes___srcWebp' |
  'childImageSharp___sizes___srcSetWebp' |
  'childImageSharp___sizes___sizes' |
  'childImageSharp___sizes___originalImg' |
  'childImageSharp___sizes___originalName' |
  'childImageSharp___sizes___presentationWidth' |
  'childImageSharp___sizes___presentationHeight' |
  'childImageSharp___original___width' |
  'childImageSharp___original___height' |
  'childImageSharp___original___src' |
  'childImageSharp___resize___src' |
  'childImageSharp___resize___tracedSVG' |
  'childImageSharp___resize___width' |
  'childImageSharp___resize___height' |
  'childImageSharp___resize___aspectRatio' |
  'childImageSharp___resize___originalName' |
  'childImageSharp___id' |
  'childImageSharp___parent___id' |
  'childImageSharp___parent___parent___id' |
  'childImageSharp___parent___parent___children' |
  'childImageSharp___parent___children' |
  'childImageSharp___parent___children___id' |
  'childImageSharp___parent___children___children' |
  'childImageSharp___parent___internal___content' |
  'childImageSharp___parent___internal___contentDigest' |
  'childImageSharp___parent___internal___description' |
  'childImageSharp___parent___internal___fieldOwners' |
  'childImageSharp___parent___internal___ignoreType' |
  'childImageSharp___parent___internal___mediaType' |
  'childImageSharp___parent___internal___owner' |
  'childImageSharp___parent___internal___type' |
  'childImageSharp___children' |
  'childImageSharp___children___id' |
  'childImageSharp___children___parent___id' |
  'childImageSharp___children___parent___children' |
  'childImageSharp___children___children' |
  'childImageSharp___children___children___id' |
  'childImageSharp___children___children___children' |
  'childImageSharp___children___internal___content' |
  'childImageSharp___children___internal___contentDigest' |
  'childImageSharp___children___internal___description' |
  'childImageSharp___children___internal___fieldOwners' |
  'childImageSharp___children___internal___ignoreType' |
  'childImageSharp___children___internal___mediaType' |
  'childImageSharp___children___internal___owner' |
  'childImageSharp___children___internal___type' |
  'childImageSharp___internal___content' |
  'childImageSharp___internal___contentDigest' |
  'childImageSharp___internal___description' |
  'childImageSharp___internal___fieldOwners' |
  'childImageSharp___internal___ignoreType' |
  'childImageSharp___internal___mediaType' |
  'childImageSharp___internal___owner' |
  'childImageSharp___internal___type' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<FileEdge>,
  nodes: Array<File>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>,
  ne?: Maybe<Scalars['Float']>,
  gt?: Maybe<Scalars['Float']>,
  gte?: Maybe<Scalars['Float']>,
  lt?: Maybe<Scalars['Float']>,
  lte?: Maybe<Scalars['Float']>,
  in?: Maybe<Array<Maybe<Scalars['Float']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>,
};

export type ImageCropFocus = 
  'CENTER' |
  'NORTH' |
  'NORTHEAST' |
  'EAST' |
  'SOUTHEAST' |
  'SOUTH' |
  'SOUTHWEST' |
  'WEST' |
  'NORTHWEST' |
  'ENTROPY' |
  'ATTENTION';

export type ImageFit = 
  'COVER' |
  'CONTAIN' |
  'FILL';

export type ImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>,
  resolutions?: Maybe<ImageSharpResolutions>,
  fluid?: Maybe<ImageSharpFluid>,
  sizes?: Maybe<ImageSharpSizes>,
  original?: Maybe<ImageSharpOriginal>,
  resize?: Maybe<ImageSharpResize>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpResolutionsArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpSizesArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  base64Width?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  duotone?: Maybe<DuotoneGradient>,
  traceSVG?: Maybe<Potrace>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<ImageFormat>,
  toFormatBase64?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>,
  sizes?: Maybe<Scalars['String']>,
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  quality?: Maybe<Scalars['Int']>,
  jpegQuality?: Maybe<Scalars['Int']>,
  pngQuality?: Maybe<Scalars['Int']>,
  webpQuality?: Maybe<Scalars['Int']>,
  jpegProgressive?: Maybe<Scalars['Boolean']>,
  pngCompressionLevel?: Maybe<Scalars['Int']>,
  pngCompressionSpeed?: Maybe<Scalars['Int']>,
  grayscale?: Maybe<Scalars['Boolean']>,
  duotone?: Maybe<DuotoneGradient>,
  base64?: Maybe<Scalars['Boolean']>,
  traceSVG?: Maybe<Potrace>,
  toFormat?: Maybe<ImageFormat>,
  cropFocus?: Maybe<ImageCropFocus>,
  fit?: Maybe<ImageFit>,
  background?: Maybe<Scalars['String']>,
  rotate?: Maybe<Scalars['Int']>,
  trim?: Maybe<Scalars['Float']>
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<ImageSharpGroupConnection>,
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: ImageSharpFieldsEnum
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>,
  node: ImageSharp,
  previous?: Maybe<ImageSharp>,
};

export type ImageSharpFieldsEnum = 
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'fixed___originalName' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'resolutions___originalName' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'fluid___originalImg' |
  'fluid___originalName' |
  'fluid___presentationWidth' |
  'fluid___presentationHeight' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'sizes___originalImg' |
  'sizes___originalName' |
  'sizes___presentationWidth' |
  'sizes___presentationHeight' |
  'original___width' |
  'original___height' |
  'original___src' |
  'resize___src' |
  'resize___tracedSVG' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio' |
  'resize___originalName' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<ImageSharpEdge>,
  nodes: Array<ImageSharp>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  width?: Maybe<IntQueryOperatorInput>,
  height?: Maybe<IntQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpResolutions = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width: Scalars['Float'],
  height: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
};

export type ImageSharpResolutionsFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
};

export type ImageSharpSizes = {
  base64?: Maybe<Scalars['String']>,
  tracedSVG?: Maybe<Scalars['String']>,
  aspectRatio: Scalars['Float'],
  src: Scalars['String'],
  srcSet: Scalars['String'],
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes: Scalars['String'],
  originalImg?: Maybe<Scalars['String']>,
  originalName?: Maybe<Scalars['String']>,
  presentationWidth?: Maybe<Scalars['Int']>,
  presentationHeight?: Maybe<Scalars['Int']>,
};

export type ImageSharpSizesFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  tracedSVG?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
  originalImg?: Maybe<StringQueryOperatorInput>,
  originalName?: Maybe<StringQueryOperatorInput>,
  presentationWidth?: Maybe<IntQueryOperatorInput>,
  presentationHeight?: Maybe<IntQueryOperatorInput>,
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Internal = {
  content?: Maybe<Scalars['String']>,
  contentDigest: Scalars['String'],
  description?: Maybe<Scalars['String']>,
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>,
  ignoreType?: Maybe<Scalars['Boolean']>,
  mediaType?: Maybe<Scalars['String']>,
  owner: Scalars['String'],
  type: Scalars['String'],
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>,
  contentDigest?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  fieldOwners?: Maybe<StringQueryOperatorInput>,
  ignoreType?: Maybe<BooleanQueryOperatorInput>,
  mediaType?: Maybe<StringQueryOperatorInput>,
  owner?: Maybe<StringQueryOperatorInput>,
  type?: Maybe<StringQueryOperatorInput>,
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>,
  ne?: Maybe<Scalars['Int']>,
  gt?: Maybe<Scalars['Int']>,
  gte?: Maybe<Scalars['Int']>,
  lt?: Maybe<Scalars['Int']>,
  lte?: Maybe<Scalars['Int']>,
  in?: Maybe<Array<Maybe<Scalars['Int']>>>,
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>,
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>,
  ne?: Maybe<Scalars['JSON']>,
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>,
  regex?: Maybe<Scalars['JSON']>,
  glob?: Maybe<Scalars['JSON']>,
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>,
};

export type PageInfo = {
  currentPage: Scalars['Int'],
  hasPreviousPage: Scalars['Boolean'],
  hasNextPage: Scalars['Boolean'],
  itemCount: Scalars['Int'],
  pageCount: Scalars['Int'],
  perPage?: Maybe<Scalars['Int']>,
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>,
  turdSize?: Maybe<Scalars['Float']>,
  alphaMax?: Maybe<Scalars['Float']>,
  optCurve?: Maybe<Scalars['Boolean']>,
  optTolerance?: Maybe<Scalars['Float']>,
  threshold?: Maybe<Scalars['Int']>,
  blackOnWhite?: Maybe<Scalars['Boolean']>,
  color?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
};

export type PotraceTurnPolicy = 
  'TURNPOLICY_BLACK' |
  'TURNPOLICY_WHITE' |
  'TURNPOLICY_LEFT' |
  'TURNPOLICY_RIGHT' |
  'TURNPOLICY_MINORITY' |
  'TURNPOLICY_MAJORITY';

export type Query = {
  file?: Maybe<File>,
  allFile: FileConnection,
  directory?: Maybe<Directory>,
  allDirectory: DirectoryConnection,
  sitePage?: Maybe<SitePage>,
  allSitePage: SitePageConnection,
  imageSharp?: Maybe<ImageSharp>,
  allImageSharp: ImageSharpConnection,
  sanityAbout?: Maybe<SanityAbout>,
  allSanityAbout: SanityAboutConnection,
  sanityBlog?: Maybe<SanityBlog>,
  allSanityBlog: SanityBlogConnection,
  sanityPortfolio?: Maybe<SanityPortfolio>,
  allSanityPortfolio: SanityPortfolioConnection,
  sanityFileAsset?: Maybe<SanityFileAsset>,
  allSanityFileAsset: SanityFileAssetConnection,
  sanityImageAsset?: Maybe<SanityImageAsset>,
  allSanityImageAsset: SanityImageAssetConnection,
  sanityWork?: Maybe<SanityWork>,
  allSanityWork: SanityWorkConnection,
  site?: Maybe<Site>,
  allSite: SiteConnection,
  sitePlugin?: Maybe<SitePlugin>,
  allSitePlugin: SitePluginConnection,
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  publicURL?: Maybe<StringQueryOperatorInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>,
  sort?: Maybe<FileSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>,
  absolutePath?: Maybe<StringQueryOperatorInput>,
  relativePath?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<IntQueryOperatorInput>,
  prettySize?: Maybe<StringQueryOperatorInput>,
  modifiedTime?: Maybe<DateQueryOperatorInput>,
  accessTime?: Maybe<DateQueryOperatorInput>,
  changeTime?: Maybe<DateQueryOperatorInput>,
  birthTime?: Maybe<DateQueryOperatorInput>,
  root?: Maybe<StringQueryOperatorInput>,
  dir?: Maybe<StringQueryOperatorInput>,
  base?: Maybe<StringQueryOperatorInput>,
  ext?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  relativeDirectory?: Maybe<StringQueryOperatorInput>,
  dev?: Maybe<IntQueryOperatorInput>,
  mode?: Maybe<IntQueryOperatorInput>,
  nlink?: Maybe<IntQueryOperatorInput>,
  uid?: Maybe<IntQueryOperatorInput>,
  gid?: Maybe<IntQueryOperatorInput>,
  rdev?: Maybe<IntQueryOperatorInput>,
  ino?: Maybe<FloatQueryOperatorInput>,
  atimeMs?: Maybe<FloatQueryOperatorInput>,
  mtimeMs?: Maybe<FloatQueryOperatorInput>,
  ctimeMs?: Maybe<FloatQueryOperatorInput>,
  atime?: Maybe<DateQueryOperatorInput>,
  mtime?: Maybe<DateQueryOperatorInput>,
  ctime?: Maybe<DateQueryOperatorInput>,
  birthtime?: Maybe<DateQueryOperatorInput>,
  birthtimeMs?: Maybe<FloatQueryOperatorInput>,
  blksize?: Maybe<IntQueryOperatorInput>,
  blocks?: Maybe<IntQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>,
  sort?: Maybe<DirectorySortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>,
  sort?: Maybe<SitePageSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>,
  resolutions?: Maybe<ImageSharpResolutionsFilterInput>,
  fluid?: Maybe<ImageSharpFluidFilterInput>,
  sizes?: Maybe<ImageSharpSizesFilterInput>,
  original?: Maybe<ImageSharpOriginalFilterInput>,
  resize?: Maybe<ImageSharpResizeFilterInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>,
  sort?: Maybe<ImageSharpSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityAboutArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  tldr?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  mainImage?: Maybe<SanityImageFilterInput>,
  aboutme?: Maybe<SanityBlockFilterListInput>,
  _rawAboutme?: Maybe<JsonQueryOperatorInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawMainImage?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityAboutArgs = {
  filter?: Maybe<SanityAboutFilterInput>,
  sort?: Maybe<SanityAboutSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityBlogArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  mainImage?: Maybe<SanityImageFilterInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
  lastUpdated?: Maybe<DateQueryOperatorInput>,
  body?: Maybe<SanityBlockFilterListInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawMainImage?: Maybe<JsonQueryOperatorInput>,
  _rawBody?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityBlogArgs = {
  filter?: Maybe<SanityBlogFilterInput>,
  sort?: Maybe<SanityBlogSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityPortfolioArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  pageTitle?: Maybe<StringQueryOperatorInput>,
  profilePhoto?: Maybe<SanityImageFilterInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  experience?: Maybe<SanityExperienceFilterListInput>,
  work?: Maybe<SanityWorkDetailsFilterListInput>,
  testimonials?: Maybe<SanityTestimonialFilterListInput>,
  accessGrant?: Maybe<StringQueryOperatorInput>,
  about?: Maybe<SanityBlockFilterListInput>,
  myPreferences?: Maybe<SanityBlockFilterListInput>,
  _rawProfilePhoto?: Maybe<JsonQueryOperatorInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawAbout?: Maybe<JsonQueryOperatorInput>,
  _rawExperience?: Maybe<JsonQueryOperatorInput>,
  _rawWork?: Maybe<JsonQueryOperatorInput>,
  _rawTestimonials?: Maybe<JsonQueryOperatorInput>,
  _rawMyPreferences?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityPortfolioArgs = {
  filter?: Maybe<SanityPortfolioFilterInput>,
  sort?: Maybe<SanityPortfolioSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityFileAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  source?: Maybe<SanityAssetSourceDataFilterInput>,
  _rawSource?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityFileAssetArgs = {
  filter?: Maybe<SanityFileAssetFilterInput>,
  sort?: Maybe<SanityFileAssetSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityImageAssetArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  metadata?: Maybe<SanityImageMetadataFilterInput>,
  source?: Maybe<SanityAssetSourceDataFilterInput>,
  fixed?: Maybe<SanityImageFixedFilterInput>,
  fluid?: Maybe<SanityImageFluidFilterInput>,
  _rawMetadata?: Maybe<JsonQueryOperatorInput>,
  _rawSource?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>
};


export type QueryAllSanityImageAssetArgs = {
  filter?: Maybe<SanityImageAssetFilterInput>,
  sort?: Maybe<SanityImageAssetSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySanityWorkArgs = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  mainImage?: Maybe<SanityImageFilterInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
  publishedAt?: Maybe<DateQueryOperatorInput>,
  themeColor?: Maybe<SanityColorFilterInput>,
  problemStatement?: Maybe<SanityBlockFilterListInput>,
  solution?: Maybe<SanityBlockFilterListInput>,
  body?: Maybe<SanityBlockFilterListInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawProblemStatement?: Maybe<JsonQueryOperatorInput>,
  _rawSolution?: Maybe<JsonQueryOperatorInput>,
  _rawMainImage?: Maybe<JsonQueryOperatorInput>,
  _rawBody?: Maybe<JsonQueryOperatorInput>,
  _rawThemeColor?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>
};


export type QueryAllSanityWorkArgs = {
  filter?: Maybe<SanityWorkFilterInput>,
  sort?: Maybe<SanityWorkSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySiteArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>,
  sort?: Maybe<SiteSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>,
  sort?: Maybe<SitePluginSortInput>,
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>
};

export type SanityAbout = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  tldr?: Maybe<Scalars['String']>,
  slug?: Maybe<SanitySlug>,
  mainImage?: Maybe<SanityImage>,
  aboutme?: Maybe<Array<Maybe<SanityBlock>>>,
  _rawAboutme?: Maybe<Scalars['JSON']>,
  _rawSlug?: Maybe<Scalars['JSON']>,
  _rawMainImage?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityAbout_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityAbout_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityAbout_RawAboutmeArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityAbout_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityAbout_RawMainImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityAboutConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SanityAboutEdge>,
  nodes: Array<SanityAbout>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityAboutGroupConnection>,
};


export type SanityAboutConnectionDistinctArgs = {
  field: SanityAboutFieldsEnum
};


export type SanityAboutConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityAboutFieldsEnum
};

export type SanityAboutEdge = {
  next?: Maybe<SanityAbout>,
  node: SanityAbout,
  previous?: Maybe<SanityAbout>,
};

export type SanityAboutFieldsEnum = 
  '_id' |
  '_type' |
  '_createdAt' |
  '_updatedAt' |
  '_rev' |
  '_key' |
  'title' |
  'tldr' |
  'slug____key' |
  'slug____type' |
  'slug___current' |
  'mainImage____key' |
  'mainImage____type' |
  'mainImage___asset____id' |
  'mainImage___asset____type' |
  'mainImage___asset____createdAt' |
  'mainImage___asset____updatedAt' |
  'mainImage___asset____rev' |
  'mainImage___asset____key' |
  'mainImage___asset___originalFilename' |
  'mainImage___asset___label' |
  'mainImage___asset___title' |
  'mainImage___asset___description' |
  'mainImage___asset___sha1hash' |
  'mainImage___asset___extension' |
  'mainImage___asset___mimeType' |
  'mainImage___asset___size' |
  'mainImage___asset___assetId' |
  'mainImage___asset___path' |
  'mainImage___asset___url' |
  'mainImage___asset___metadata____key' |
  'mainImage___asset___metadata____type' |
  'mainImage___asset___metadata___lqip' |
  'mainImage___asset___metadata___hasAlpha' |
  'mainImage___asset___metadata___isOpaque' |
  'mainImage___asset___source____key' |
  'mainImage___asset___source____type' |
  'mainImage___asset___source___name' |
  'mainImage___asset___source___sanityId' |
  'mainImage___asset___source___url' |
  'mainImage___asset___fixed___base64' |
  'mainImage___asset___fixed___aspectRatio' |
  'mainImage___asset___fixed___width' |
  'mainImage___asset___fixed___height' |
  'mainImage___asset___fixed___src' |
  'mainImage___asset___fixed___srcSet' |
  'mainImage___asset___fixed___srcWebp' |
  'mainImage___asset___fixed___srcSetWebp' |
  'mainImage___asset___fluid___base64' |
  'mainImage___asset___fluid___aspectRatio' |
  'mainImage___asset___fluid___src' |
  'mainImage___asset___fluid___srcSet' |
  'mainImage___asset___fluid___srcWebp' |
  'mainImage___asset___fluid___srcSetWebp' |
  'mainImage___asset___fluid___sizes' |
  'mainImage___asset____rawMetadata' |
  'mainImage___asset____rawSource' |
  'mainImage___asset___id' |
  'mainImage___asset___parent___id' |
  'mainImage___asset___parent___children' |
  'mainImage___asset___children' |
  'mainImage___asset___children___id' |
  'mainImage___asset___children___children' |
  'mainImage___asset___internal___content' |
  'mainImage___asset___internal___contentDigest' |
  'mainImage___asset___internal___description' |
  'mainImage___asset___internal___fieldOwners' |
  'mainImage___asset___internal___ignoreType' |
  'mainImage___asset___internal___mediaType' |
  'mainImage___asset___internal___owner' |
  'mainImage___asset___internal___type' |
  'mainImage___asset___childImageSharp___id' |
  'mainImage___asset___childImageSharp___children' |
  'mainImage___hotspot____key' |
  'mainImage___hotspot____type' |
  'mainImage___hotspot___x' |
  'mainImage___hotspot___y' |
  'mainImage___hotspot___height' |
  'mainImage___hotspot___width' |
  'mainImage___crop____key' |
  'mainImage___crop____type' |
  'mainImage___crop___top' |
  'mainImage___crop___bottom' |
  'mainImage___crop___left' |
  'mainImage___crop___right' |
  'aboutme' |
  'aboutme____key' |
  'aboutme____type' |
  'aboutme___sanityChildren' |
  'aboutme___sanityChildren____key' |
  'aboutme___sanityChildren____type' |
  'aboutme___sanityChildren___marks' |
  'aboutme___sanityChildren___text' |
  'aboutme___style' |
  'aboutme___list' |
  '_rawAboutme' |
  '_rawSlug' |
  '_rawMainImage' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type SanityAboutFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  tldr?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  mainImage?: Maybe<SanityImageFilterInput>,
  aboutme?: Maybe<SanityBlockFilterListInput>,
  _rawAboutme?: Maybe<JsonQueryOperatorInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawMainImage?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityAboutGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SanityAboutEdge>,
  nodes: Array<SanityAbout>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityAboutSortInput = {
  fields?: Maybe<Array<Maybe<SanityAboutFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityAssetSourceData = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  sanityId?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

export type SanityAssetSourceDataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  sanityId?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
};

export type SanityBlock = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  sanityChildren?: Maybe<Array<Maybe<SanitySpan>>>,
  style?: Maybe<Scalars['String']>,
  list?: Maybe<Scalars['String']>,
};

export type SanityBlockFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  sanityChildren?: Maybe<SanitySpanFilterListInput>,
  style?: Maybe<StringQueryOperatorInput>,
  list?: Maybe<StringQueryOperatorInput>,
};

export type SanityBlockFilterListInput = {
  elemMatch?: Maybe<SanityBlockFilterInput>,
};

export type SanityBlockOrImage = SanityBlock | SanityImage;

export type SanityBlog = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<SanitySlug>,
  mainImage?: Maybe<SanityImage>,
  featured?: Maybe<Scalars['Boolean']>,
  lastUpdated?: Maybe<Scalars['Date']>,
  body?: Maybe<Array<Maybe<SanityBlock>>>,
  _rawSlug?: Maybe<Scalars['JSON']>,
  _rawMainImage?: Maybe<Scalars['JSON']>,
  _rawBody?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityBlog_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityBlog_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityBlogLastUpdatedArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityBlog_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityBlog_RawMainImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityBlog_RawBodyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityBlogConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SanityBlogEdge>,
  nodes: Array<SanityBlog>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityBlogGroupConnection>,
};


export type SanityBlogConnectionDistinctArgs = {
  field: SanityBlogFieldsEnum
};


export type SanityBlogConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityBlogFieldsEnum
};

export type SanityBlogEdge = {
  next?: Maybe<SanityBlog>,
  node: SanityBlog,
  previous?: Maybe<SanityBlog>,
};

export type SanityBlogFieldsEnum = 
  '_id' |
  '_type' |
  '_createdAt' |
  '_updatedAt' |
  '_rev' |
  '_key' |
  'title' |
  'slug____key' |
  'slug____type' |
  'slug___current' |
  'mainImage____key' |
  'mainImage____type' |
  'mainImage___asset____id' |
  'mainImage___asset____type' |
  'mainImage___asset____createdAt' |
  'mainImage___asset____updatedAt' |
  'mainImage___asset____rev' |
  'mainImage___asset____key' |
  'mainImage___asset___originalFilename' |
  'mainImage___asset___label' |
  'mainImage___asset___title' |
  'mainImage___asset___description' |
  'mainImage___asset___sha1hash' |
  'mainImage___asset___extension' |
  'mainImage___asset___mimeType' |
  'mainImage___asset___size' |
  'mainImage___asset___assetId' |
  'mainImage___asset___path' |
  'mainImage___asset___url' |
  'mainImage___asset___metadata____key' |
  'mainImage___asset___metadata____type' |
  'mainImage___asset___metadata___lqip' |
  'mainImage___asset___metadata___hasAlpha' |
  'mainImage___asset___metadata___isOpaque' |
  'mainImage___asset___source____key' |
  'mainImage___asset___source____type' |
  'mainImage___asset___source___name' |
  'mainImage___asset___source___sanityId' |
  'mainImage___asset___source___url' |
  'mainImage___asset___fixed___base64' |
  'mainImage___asset___fixed___aspectRatio' |
  'mainImage___asset___fixed___width' |
  'mainImage___asset___fixed___height' |
  'mainImage___asset___fixed___src' |
  'mainImage___asset___fixed___srcSet' |
  'mainImage___asset___fixed___srcWebp' |
  'mainImage___asset___fixed___srcSetWebp' |
  'mainImage___asset___fluid___base64' |
  'mainImage___asset___fluid___aspectRatio' |
  'mainImage___asset___fluid___src' |
  'mainImage___asset___fluid___srcSet' |
  'mainImage___asset___fluid___srcWebp' |
  'mainImage___asset___fluid___srcSetWebp' |
  'mainImage___asset___fluid___sizes' |
  'mainImage___asset____rawMetadata' |
  'mainImage___asset____rawSource' |
  'mainImage___asset___id' |
  'mainImage___asset___parent___id' |
  'mainImage___asset___parent___children' |
  'mainImage___asset___children' |
  'mainImage___asset___children___id' |
  'mainImage___asset___children___children' |
  'mainImage___asset___internal___content' |
  'mainImage___asset___internal___contentDigest' |
  'mainImage___asset___internal___description' |
  'mainImage___asset___internal___fieldOwners' |
  'mainImage___asset___internal___ignoreType' |
  'mainImage___asset___internal___mediaType' |
  'mainImage___asset___internal___owner' |
  'mainImage___asset___internal___type' |
  'mainImage___asset___childImageSharp___id' |
  'mainImage___asset___childImageSharp___children' |
  'mainImage___hotspot____key' |
  'mainImage___hotspot____type' |
  'mainImage___hotspot___x' |
  'mainImage___hotspot___y' |
  'mainImage___hotspot___height' |
  'mainImage___hotspot___width' |
  'mainImage___crop____key' |
  'mainImage___crop____type' |
  'mainImage___crop___top' |
  'mainImage___crop___bottom' |
  'mainImage___crop___left' |
  'mainImage___crop___right' |
  'featured' |
  'lastUpdated' |
  'body' |
  'body____key' |
  'body____type' |
  'body___sanityChildren' |
  'body___sanityChildren____key' |
  'body___sanityChildren____type' |
  'body___sanityChildren___marks' |
  'body___sanityChildren___text' |
  'body___style' |
  'body___list' |
  '_rawSlug' |
  '_rawMainImage' |
  '_rawBody' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type SanityBlogFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  mainImage?: Maybe<SanityImageFilterInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
  lastUpdated?: Maybe<DateQueryOperatorInput>,
  body?: Maybe<SanityBlockFilterListInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawMainImage?: Maybe<JsonQueryOperatorInput>,
  _rawBody?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityBlogGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SanityBlogEdge>,
  nodes: Array<SanityBlog>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityBlogSortInput = {
  fields?: Maybe<Array<Maybe<SanityBlogFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityColor = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  hex?: Maybe<Scalars['String']>,
  alpha?: Maybe<Scalars['Float']>,
  hsl?: Maybe<SanityHslaColor>,
  hsv?: Maybe<SanityHsvaColor>,
  rgb?: Maybe<SanityRgbaColor>,
};

export type SanityColorFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  hex?: Maybe<StringQueryOperatorInput>,
  alpha?: Maybe<FloatQueryOperatorInput>,
  hsl?: Maybe<SanityHslaColorFilterInput>,
  hsv?: Maybe<SanityHsvaColorFilterInput>,
  rgb?: Maybe<SanityRgbaColorFilterInput>,
};

/** A Sanity document */
export type SanityDocument = {
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
};

export type SanityExperience = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  company?: Maybe<Scalars['String']>,
  companyLogo?: Maybe<SanityImage>,
  designation?: Maybe<Scalars['String']>,
  currentlyWorking?: Maybe<Scalars['Boolean']>,
};

export type SanityExperienceFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  company?: Maybe<StringQueryOperatorInput>,
  companyLogo?: Maybe<SanityImageFilterInput>,
  designation?: Maybe<StringQueryOperatorInput>,
  currentlyWorking?: Maybe<BooleanQueryOperatorInput>,
};

export type SanityExperienceFilterListInput = {
  elemMatch?: Maybe<SanityExperienceFilterInput>,
};

export type SanityFile = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  asset?: Maybe<SanityFileAsset>,
};

export type SanityFileAsset = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  originalFilename?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  sha1hash?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  mimeType?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  assetId?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  source?: Maybe<SanityAssetSourceData>,
  _rawSource?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityFileAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityFileAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityFileAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityFileAssetConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SanityFileAssetEdge>,
  nodes: Array<SanityFileAsset>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityFileAssetGroupConnection>,
};


export type SanityFileAssetConnectionDistinctArgs = {
  field: SanityFileAssetFieldsEnum
};


export type SanityFileAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityFileAssetFieldsEnum
};

export type SanityFileAssetEdge = {
  next?: Maybe<SanityFileAsset>,
  node: SanityFileAsset,
  previous?: Maybe<SanityFileAsset>,
};

export type SanityFileAssetFieldsEnum = 
  '_id' |
  '_type' |
  '_createdAt' |
  '_updatedAt' |
  '_rev' |
  '_key' |
  'originalFilename' |
  'label' |
  'title' |
  'description' |
  'sha1hash' |
  'extension' |
  'mimeType' |
  'size' |
  'assetId' |
  'path' |
  'url' |
  'source____key' |
  'source____type' |
  'source___name' |
  'source___sanityId' |
  'source___url' |
  '_rawSource' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type SanityFileAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  source?: Maybe<SanityAssetSourceDataFilterInput>,
  _rawSource?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityFileAssetGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SanityFileAssetEdge>,
  nodes: Array<SanityFileAsset>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityFileAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityFileAssetFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityGeopoint = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  lat?: Maybe<Scalars['Float']>,
  lng?: Maybe<Scalars['Float']>,
  alt?: Maybe<Scalars['Float']>,
};

export type SanityGeopointFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  lat?: Maybe<FloatQueryOperatorInput>,
  lng?: Maybe<FloatQueryOperatorInput>,
  alt?: Maybe<FloatQueryOperatorInput>,
};

export type SanityHslaColor = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  h?: Maybe<Scalars['Float']>,
  s?: Maybe<Scalars['Float']>,
  l?: Maybe<Scalars['Float']>,
  a?: Maybe<Scalars['Float']>,
};

export type SanityHslaColorFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  h?: Maybe<FloatQueryOperatorInput>,
  s?: Maybe<FloatQueryOperatorInput>,
  l?: Maybe<FloatQueryOperatorInput>,
  a?: Maybe<FloatQueryOperatorInput>,
};

export type SanityHsvaColor = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  h?: Maybe<Scalars['Float']>,
  s?: Maybe<Scalars['Float']>,
  v?: Maybe<Scalars['Float']>,
  a?: Maybe<Scalars['Float']>,
};

export type SanityHsvaColorFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  h?: Maybe<FloatQueryOperatorInput>,
  s?: Maybe<FloatQueryOperatorInput>,
  v?: Maybe<FloatQueryOperatorInput>,
  a?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImage = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  asset?: Maybe<SanityImageAsset>,
  hotspot?: Maybe<SanityImageHotspot>,
  crop?: Maybe<SanityImageCrop>,
};

export type SanityImageAsset = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  originalFilename?: Maybe<Scalars['String']>,
  label?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  sha1hash?: Maybe<Scalars['String']>,
  extension?: Maybe<Scalars['String']>,
  mimeType?: Maybe<Scalars['String']>,
  size?: Maybe<Scalars['Float']>,
  assetId?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
  metadata?: Maybe<SanityImageMetadata>,
  source?: Maybe<SanityAssetSourceData>,
  fixed?: Maybe<SanityImageFixed>,
  fluid?: Maybe<SanityImageFluid>,
  _rawMetadata?: Maybe<Scalars['JSON']>,
  _rawSource?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  childImageSharp?: Maybe<ImageSharp>,
};


export type SanityImageAsset_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityImageAsset_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityImageAssetFixedArgs = {
  width?: Maybe<Scalars['Int']>,
  height?: Maybe<Scalars['Int']>,
  toFormat?: Maybe<SanityImageFormat>
};


export type SanityImageAssetFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>,
  maxHeight?: Maybe<Scalars['Int']>,
  sizes?: Maybe<Scalars['String']>,
  toFormat?: Maybe<SanityImageFormat>
};


export type SanityImageAsset_RawMetadataArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityImageAsset_RawSourceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityImageAssetConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SanityImageAssetEdge>,
  nodes: Array<SanityImageAsset>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityImageAssetGroupConnection>,
};


export type SanityImageAssetConnectionDistinctArgs = {
  field: SanityImageAssetFieldsEnum
};


export type SanityImageAssetConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityImageAssetFieldsEnum
};

export type SanityImageAssetEdge = {
  next?: Maybe<SanityImageAsset>,
  node: SanityImageAsset,
  previous?: Maybe<SanityImageAsset>,
};

export type SanityImageAssetFieldsEnum = 
  '_id' |
  '_type' |
  '_createdAt' |
  '_updatedAt' |
  '_rev' |
  '_key' |
  'originalFilename' |
  'label' |
  'title' |
  'description' |
  'sha1hash' |
  'extension' |
  'mimeType' |
  'size' |
  'assetId' |
  'path' |
  'url' |
  'metadata____key' |
  'metadata____type' |
  'metadata___location____key' |
  'metadata___location____type' |
  'metadata___location___lat' |
  'metadata___location___lng' |
  'metadata___location___alt' |
  'metadata___dimensions____key' |
  'metadata___dimensions____type' |
  'metadata___dimensions___height' |
  'metadata___dimensions___width' |
  'metadata___dimensions___aspectRatio' |
  'metadata___palette____key' |
  'metadata___palette____type' |
  'metadata___palette___darkMuted____key' |
  'metadata___palette___darkMuted____type' |
  'metadata___palette___darkMuted___background' |
  'metadata___palette___darkMuted___foreground' |
  'metadata___palette___darkMuted___population' |
  'metadata___palette___darkMuted___title' |
  'metadata___palette___lightVibrant____key' |
  'metadata___palette___lightVibrant____type' |
  'metadata___palette___lightVibrant___background' |
  'metadata___palette___lightVibrant___foreground' |
  'metadata___palette___lightVibrant___population' |
  'metadata___palette___lightVibrant___title' |
  'metadata___palette___darkVibrant____key' |
  'metadata___palette___darkVibrant____type' |
  'metadata___palette___darkVibrant___background' |
  'metadata___palette___darkVibrant___foreground' |
  'metadata___palette___darkVibrant___population' |
  'metadata___palette___darkVibrant___title' |
  'metadata___palette___vibrant____key' |
  'metadata___palette___vibrant____type' |
  'metadata___palette___vibrant___background' |
  'metadata___palette___vibrant___foreground' |
  'metadata___palette___vibrant___population' |
  'metadata___palette___vibrant___title' |
  'metadata___palette___dominant____key' |
  'metadata___palette___dominant____type' |
  'metadata___palette___dominant___background' |
  'metadata___palette___dominant___foreground' |
  'metadata___palette___dominant___population' |
  'metadata___palette___dominant___title' |
  'metadata___palette___lightMuted____key' |
  'metadata___palette___lightMuted____type' |
  'metadata___palette___lightMuted___background' |
  'metadata___palette___lightMuted___foreground' |
  'metadata___palette___lightMuted___population' |
  'metadata___palette___lightMuted___title' |
  'metadata___palette___muted____key' |
  'metadata___palette___muted____type' |
  'metadata___palette___muted___background' |
  'metadata___palette___muted___foreground' |
  'metadata___palette___muted___population' |
  'metadata___palette___muted___title' |
  'metadata___lqip' |
  'metadata___hasAlpha' |
  'metadata___isOpaque' |
  'source____key' |
  'source____type' |
  'source___name' |
  'source___sanityId' |
  'source___url' |
  'fixed___base64' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'fluid___base64' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  '_rawMetadata' |
  '_rawSource' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'childImageSharp___fixed___base64' |
  'childImageSharp___fixed___tracedSVG' |
  'childImageSharp___fixed___aspectRatio' |
  'childImageSharp___fixed___width' |
  'childImageSharp___fixed___height' |
  'childImageSharp___fixed___src' |
  'childImageSharp___fixed___srcSet' |
  'childImageSharp___fixed___srcWebp' |
  'childImageSharp___fixed___srcSetWebp' |
  'childImageSharp___fixed___originalName' |
  'childImageSharp___resolutions___base64' |
  'childImageSharp___resolutions___tracedSVG' |
  'childImageSharp___resolutions___aspectRatio' |
  'childImageSharp___resolutions___width' |
  'childImageSharp___resolutions___height' |
  'childImageSharp___resolutions___src' |
  'childImageSharp___resolutions___srcSet' |
  'childImageSharp___resolutions___srcWebp' |
  'childImageSharp___resolutions___srcSetWebp' |
  'childImageSharp___resolutions___originalName' |
  'childImageSharp___fluid___base64' |
  'childImageSharp___fluid___tracedSVG' |
  'childImageSharp___fluid___aspectRatio' |
  'childImageSharp___fluid___src' |
  'childImageSharp___fluid___srcSet' |
  'childImageSharp___fluid___srcWebp' |
  'childImageSharp___fluid___srcSetWebp' |
  'childImageSharp___fluid___sizes' |
  'childImageSharp___fluid___originalImg' |
  'childImageSharp___fluid___originalName' |
  'childImageSharp___fluid___presentationWidth' |
  'childImageSharp___fluid___presentationHeight' |
  'childImageSharp___sizes___base64' |
  'childImageSharp___sizes___tracedSVG' |
  'childImageSharp___sizes___aspectRatio' |
  'childImageSharp___sizes___src' |
  'childImageSharp___sizes___srcSet' |
  'childImageSharp___sizes___srcWebp' |
  'childImageSharp___sizes___srcSetWebp' |
  'childImageSharp___sizes___sizes' |
  'childImageSharp___sizes___originalImg' |
  'childImageSharp___sizes___originalName' |
  'childImageSharp___sizes___presentationWidth' |
  'childImageSharp___sizes___presentationHeight' |
  'childImageSharp___original___width' |
  'childImageSharp___original___height' |
  'childImageSharp___original___src' |
  'childImageSharp___resize___src' |
  'childImageSharp___resize___tracedSVG' |
  'childImageSharp___resize___width' |
  'childImageSharp___resize___height' |
  'childImageSharp___resize___aspectRatio' |
  'childImageSharp___resize___originalName' |
  'childImageSharp___id' |
  'childImageSharp___parent___id' |
  'childImageSharp___parent___parent___id' |
  'childImageSharp___parent___parent___children' |
  'childImageSharp___parent___children' |
  'childImageSharp___parent___children___id' |
  'childImageSharp___parent___children___children' |
  'childImageSharp___parent___internal___content' |
  'childImageSharp___parent___internal___contentDigest' |
  'childImageSharp___parent___internal___description' |
  'childImageSharp___parent___internal___fieldOwners' |
  'childImageSharp___parent___internal___ignoreType' |
  'childImageSharp___parent___internal___mediaType' |
  'childImageSharp___parent___internal___owner' |
  'childImageSharp___parent___internal___type' |
  'childImageSharp___children' |
  'childImageSharp___children___id' |
  'childImageSharp___children___parent___id' |
  'childImageSharp___children___parent___children' |
  'childImageSharp___children___children' |
  'childImageSharp___children___children___id' |
  'childImageSharp___children___children___children' |
  'childImageSharp___children___internal___content' |
  'childImageSharp___children___internal___contentDigest' |
  'childImageSharp___children___internal___description' |
  'childImageSharp___children___internal___fieldOwners' |
  'childImageSharp___children___internal___ignoreType' |
  'childImageSharp___children___internal___mediaType' |
  'childImageSharp___children___internal___owner' |
  'childImageSharp___children___internal___type' |
  'childImageSharp___internal___content' |
  'childImageSharp___internal___contentDigest' |
  'childImageSharp___internal___description' |
  'childImageSharp___internal___fieldOwners' |
  'childImageSharp___internal___ignoreType' |
  'childImageSharp___internal___mediaType' |
  'childImageSharp___internal___owner' |
  'childImageSharp___internal___type';

export type SanityImageAssetFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  originalFilename?: Maybe<StringQueryOperatorInput>,
  label?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  sha1hash?: Maybe<StringQueryOperatorInput>,
  extension?: Maybe<StringQueryOperatorInput>,
  mimeType?: Maybe<StringQueryOperatorInput>,
  size?: Maybe<FloatQueryOperatorInput>,
  assetId?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  url?: Maybe<StringQueryOperatorInput>,
  metadata?: Maybe<SanityImageMetadataFilterInput>,
  source?: Maybe<SanityAssetSourceDataFilterInput>,
  fixed?: Maybe<SanityImageFixedFilterInput>,
  fluid?: Maybe<SanityImageFluidFilterInput>,
  _rawMetadata?: Maybe<JsonQueryOperatorInput>,
  _rawSource?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  childImageSharp?: Maybe<ImageSharpFilterInput>,
};

export type SanityImageAssetGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SanityImageAssetEdge>,
  nodes: Array<SanityImageAsset>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityImageAssetSortInput = {
  fields?: Maybe<Array<Maybe<SanityImageAssetFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityImageCrop = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  top?: Maybe<Scalars['Float']>,
  bottom?: Maybe<Scalars['Float']>,
  left?: Maybe<Scalars['Float']>,
  right?: Maybe<Scalars['Float']>,
};

export type SanityImageCropFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  top?: Maybe<FloatQueryOperatorInput>,
  bottom?: Maybe<FloatQueryOperatorInput>,
  left?: Maybe<FloatQueryOperatorInput>,
  right?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImageDimensions = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  aspectRatio?: Maybe<Scalars['Float']>,
};

export type SanityImageDimensionsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImageFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  asset?: Maybe<SanityImageAssetFilterInput>,
  hotspot?: Maybe<SanityImageHotspotFilterInput>,
  crop?: Maybe<SanityImageCropFilterInput>,
};

export type SanityImageFixed = {
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
};

export type SanityImageFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
};

export type SanityImageFluid = {
  base64?: Maybe<Scalars['String']>,
  aspectRatio?: Maybe<Scalars['Float']>,
  src?: Maybe<Scalars['String']>,
  srcSet?: Maybe<Scalars['String']>,
  srcWebp?: Maybe<Scalars['String']>,
  srcSetWebp?: Maybe<Scalars['String']>,
  sizes?: Maybe<Scalars['String']>,
};

export type SanityImageFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>,
  aspectRatio?: Maybe<FloatQueryOperatorInput>,
  src?: Maybe<StringQueryOperatorInput>,
  srcSet?: Maybe<StringQueryOperatorInput>,
  srcWebp?: Maybe<StringQueryOperatorInput>,
  srcSetWebp?: Maybe<StringQueryOperatorInput>,
  sizes?: Maybe<StringQueryOperatorInput>,
};

export type SanityImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type SanityImageHotspot = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  x?: Maybe<Scalars['Float']>,
  y?: Maybe<Scalars['Float']>,
  height?: Maybe<Scalars['Float']>,
  width?: Maybe<Scalars['Float']>,
};

export type SanityImageHotspotFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  x?: Maybe<FloatQueryOperatorInput>,
  y?: Maybe<FloatQueryOperatorInput>,
  height?: Maybe<FloatQueryOperatorInput>,
  width?: Maybe<FloatQueryOperatorInput>,
};

export type SanityImageMetadata = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  location?: Maybe<SanityGeopoint>,
  dimensions?: Maybe<SanityImageDimensions>,
  palette?: Maybe<SanityImagePalette>,
  lqip?: Maybe<Scalars['String']>,
  hasAlpha?: Maybe<Scalars['Boolean']>,
  isOpaque?: Maybe<Scalars['Boolean']>,
};

export type SanityImageMetadataFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  location?: Maybe<SanityGeopointFilterInput>,
  dimensions?: Maybe<SanityImageDimensionsFilterInput>,
  palette?: Maybe<SanityImagePaletteFilterInput>,
  lqip?: Maybe<StringQueryOperatorInput>,
  hasAlpha?: Maybe<BooleanQueryOperatorInput>,
  isOpaque?: Maybe<BooleanQueryOperatorInput>,
};

export type SanityImagePalette = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  darkMuted?: Maybe<SanityImagePaletteSwatch>,
  lightVibrant?: Maybe<SanityImagePaletteSwatch>,
  darkVibrant?: Maybe<SanityImagePaletteSwatch>,
  vibrant?: Maybe<SanityImagePaletteSwatch>,
  dominant?: Maybe<SanityImagePaletteSwatch>,
  lightMuted?: Maybe<SanityImagePaletteSwatch>,
  muted?: Maybe<SanityImagePaletteSwatch>,
};

export type SanityImagePaletteFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  darkMuted?: Maybe<SanityImagePaletteSwatchFilterInput>,
  lightVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  darkVibrant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  vibrant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  dominant?: Maybe<SanityImagePaletteSwatchFilterInput>,
  lightMuted?: Maybe<SanityImagePaletteSwatchFilterInput>,
  muted?: Maybe<SanityImagePaletteSwatchFilterInput>,
};

export type SanityImagePaletteSwatch = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  background?: Maybe<Scalars['String']>,
  foreground?: Maybe<Scalars['String']>,
  population?: Maybe<Scalars['Float']>,
  title?: Maybe<Scalars['String']>,
};

export type SanityImagePaletteSwatchFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  background?: Maybe<StringQueryOperatorInput>,
  foreground?: Maybe<StringQueryOperatorInput>,
  population?: Maybe<FloatQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
};

export type SanityPortfolio = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  pageTitle?: Maybe<Scalars['String']>,
  profilePhoto?: Maybe<SanityImage>,
  slug?: Maybe<SanitySlug>,
  experience?: Maybe<Array<Maybe<SanityExperience>>>,
  work?: Maybe<Array<Maybe<SanityWorkDetails>>>,
  testimonials?: Maybe<Array<Maybe<SanityTestimonial>>>,
  accessGrant?: Maybe<Array<Maybe<Scalars['String']>>>,
  about?: Maybe<Array<Maybe<SanityBlock>>>,
  myPreferences?: Maybe<Array<Maybe<SanityBlock>>>,
  _rawProfilePhoto?: Maybe<Scalars['JSON']>,
  _rawSlug?: Maybe<Scalars['JSON']>,
  _rawAbout?: Maybe<Scalars['JSON']>,
  _rawExperience?: Maybe<Scalars['JSON']>,
  _rawWork?: Maybe<Scalars['JSON']>,
  _rawTestimonials?: Maybe<Scalars['JSON']>,
  _rawMyPreferences?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityPortfolio_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityPortfolio_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityPortfolio_RawProfilePhotoArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPortfolio_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPortfolio_RawAboutArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPortfolio_RawExperienceArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPortfolio_RawWorkArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPortfolio_RawTestimonialsArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityPortfolio_RawMyPreferencesArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityPortfolioConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SanityPortfolioEdge>,
  nodes: Array<SanityPortfolio>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityPortfolioGroupConnection>,
};


export type SanityPortfolioConnectionDistinctArgs = {
  field: SanityPortfolioFieldsEnum
};


export type SanityPortfolioConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityPortfolioFieldsEnum
};

export type SanityPortfolioEdge = {
  next?: Maybe<SanityPortfolio>,
  node: SanityPortfolio,
  previous?: Maybe<SanityPortfolio>,
};

export type SanityPortfolioFieldsEnum = 
  '_id' |
  '_type' |
  '_createdAt' |
  '_updatedAt' |
  '_rev' |
  '_key' |
  'pageTitle' |
  'profilePhoto____key' |
  'profilePhoto____type' |
  'profilePhoto___asset____id' |
  'profilePhoto___asset____type' |
  'profilePhoto___asset____createdAt' |
  'profilePhoto___asset____updatedAt' |
  'profilePhoto___asset____rev' |
  'profilePhoto___asset____key' |
  'profilePhoto___asset___originalFilename' |
  'profilePhoto___asset___label' |
  'profilePhoto___asset___title' |
  'profilePhoto___asset___description' |
  'profilePhoto___asset___sha1hash' |
  'profilePhoto___asset___extension' |
  'profilePhoto___asset___mimeType' |
  'profilePhoto___asset___size' |
  'profilePhoto___asset___assetId' |
  'profilePhoto___asset___path' |
  'profilePhoto___asset___url' |
  'profilePhoto___asset___metadata____key' |
  'profilePhoto___asset___metadata____type' |
  'profilePhoto___asset___metadata___lqip' |
  'profilePhoto___asset___metadata___hasAlpha' |
  'profilePhoto___asset___metadata___isOpaque' |
  'profilePhoto___asset___source____key' |
  'profilePhoto___asset___source____type' |
  'profilePhoto___asset___source___name' |
  'profilePhoto___asset___source___sanityId' |
  'profilePhoto___asset___source___url' |
  'profilePhoto___asset___fixed___base64' |
  'profilePhoto___asset___fixed___aspectRatio' |
  'profilePhoto___asset___fixed___width' |
  'profilePhoto___asset___fixed___height' |
  'profilePhoto___asset___fixed___src' |
  'profilePhoto___asset___fixed___srcSet' |
  'profilePhoto___asset___fixed___srcWebp' |
  'profilePhoto___asset___fixed___srcSetWebp' |
  'profilePhoto___asset___fluid___base64' |
  'profilePhoto___asset___fluid___aspectRatio' |
  'profilePhoto___asset___fluid___src' |
  'profilePhoto___asset___fluid___srcSet' |
  'profilePhoto___asset___fluid___srcWebp' |
  'profilePhoto___asset___fluid___srcSetWebp' |
  'profilePhoto___asset___fluid___sizes' |
  'profilePhoto___asset____rawMetadata' |
  'profilePhoto___asset____rawSource' |
  'profilePhoto___asset___id' |
  'profilePhoto___asset___parent___id' |
  'profilePhoto___asset___parent___children' |
  'profilePhoto___asset___children' |
  'profilePhoto___asset___children___id' |
  'profilePhoto___asset___children___children' |
  'profilePhoto___asset___internal___content' |
  'profilePhoto___asset___internal___contentDigest' |
  'profilePhoto___asset___internal___description' |
  'profilePhoto___asset___internal___fieldOwners' |
  'profilePhoto___asset___internal___ignoreType' |
  'profilePhoto___asset___internal___mediaType' |
  'profilePhoto___asset___internal___owner' |
  'profilePhoto___asset___internal___type' |
  'profilePhoto___asset___childImageSharp___id' |
  'profilePhoto___asset___childImageSharp___children' |
  'profilePhoto___hotspot____key' |
  'profilePhoto___hotspot____type' |
  'profilePhoto___hotspot___x' |
  'profilePhoto___hotspot___y' |
  'profilePhoto___hotspot___height' |
  'profilePhoto___hotspot___width' |
  'profilePhoto___crop____key' |
  'profilePhoto___crop____type' |
  'profilePhoto___crop___top' |
  'profilePhoto___crop___bottom' |
  'profilePhoto___crop___left' |
  'profilePhoto___crop___right' |
  'slug____key' |
  'slug____type' |
  'slug___current' |
  'experience' |
  'experience____key' |
  'experience____type' |
  'experience___company' |
  'experience___companyLogo____key' |
  'experience___companyLogo____type' |
  'experience___companyLogo___asset____id' |
  'experience___companyLogo___asset____type' |
  'experience___companyLogo___asset____createdAt' |
  'experience___companyLogo___asset____updatedAt' |
  'experience___companyLogo___asset____rev' |
  'experience___companyLogo___asset____key' |
  'experience___companyLogo___asset___originalFilename' |
  'experience___companyLogo___asset___label' |
  'experience___companyLogo___asset___title' |
  'experience___companyLogo___asset___description' |
  'experience___companyLogo___asset___sha1hash' |
  'experience___companyLogo___asset___extension' |
  'experience___companyLogo___asset___mimeType' |
  'experience___companyLogo___asset___size' |
  'experience___companyLogo___asset___assetId' |
  'experience___companyLogo___asset___path' |
  'experience___companyLogo___asset___url' |
  'experience___companyLogo___asset____rawMetadata' |
  'experience___companyLogo___asset____rawSource' |
  'experience___companyLogo___asset___id' |
  'experience___companyLogo___asset___children' |
  'experience___companyLogo___hotspot____key' |
  'experience___companyLogo___hotspot____type' |
  'experience___companyLogo___hotspot___x' |
  'experience___companyLogo___hotspot___y' |
  'experience___companyLogo___hotspot___height' |
  'experience___companyLogo___hotspot___width' |
  'experience___companyLogo___crop____key' |
  'experience___companyLogo___crop____type' |
  'experience___companyLogo___crop___top' |
  'experience___companyLogo___crop___bottom' |
  'experience___companyLogo___crop___left' |
  'experience___companyLogo___crop___right' |
  'experience___designation' |
  'experience___currentlyWorking' |
  'work' |
  'work____key' |
  'work____type' |
  'work___companyName' |
  'work___work' |
  'work___work____id' |
  'work___work____type' |
  'work___work____createdAt' |
  'work___work____updatedAt' |
  'work___work____rev' |
  'work___work____key' |
  'work___work___title' |
  'work___work___slug____key' |
  'work___work___slug____type' |
  'work___work___slug___current' |
  'work___work___mainImage____key' |
  'work___work___mainImage____type' |
  'work___work___featured' |
  'work___work___publishedAt' |
  'work___work___themeColor____key' |
  'work___work___themeColor____type' |
  'work___work___themeColor___hex' |
  'work___work___themeColor___alpha' |
  'work___work___problemStatement' |
  'work___work___problemStatement____key' |
  'work___work___problemStatement____type' |
  'work___work___problemStatement___sanityChildren' |
  'work___work___problemStatement___style' |
  'work___work___problemStatement___list' |
  'work___work___solution' |
  'work___work___solution____key' |
  'work___work___solution____type' |
  'work___work___solution___sanityChildren' |
  'work___work___solution___style' |
  'work___work___solution___list' |
  'work___work___body' |
  'work___work___body____key' |
  'work___work___body____type' |
  'work___work___body___sanityChildren' |
  'work___work___body___style' |
  'work___work___body___list' |
  'work___work____rawSlug' |
  'work___work____rawProblemStatement' |
  'work___work____rawSolution' |
  'work___work____rawMainImage' |
  'work___work____rawBody' |
  'work___work____rawThemeColor' |
  'work___work___id' |
  'work___work___parent___id' |
  'work___work___parent___children' |
  'work___work___children' |
  'work___work___children___id' |
  'work___work___children___children' |
  'work___work___internal___content' |
  'work___work___internal___contentDigest' |
  'work___work___internal___description' |
  'work___work___internal___fieldOwners' |
  'work___work___internal___ignoreType' |
  'work___work___internal___mediaType' |
  'work___work___internal___owner' |
  'work___work___internal___type' |
  'work___keyAchievements' |
  'work___keyAchievements____key' |
  'work___keyAchievements____type' |
  'work___keyAchievements___sanityChildren' |
  'work___keyAchievements___sanityChildren____key' |
  'work___keyAchievements___sanityChildren____type' |
  'work___keyAchievements___sanityChildren___marks' |
  'work___keyAchievements___sanityChildren___text' |
  'work___keyAchievements___style' |
  'work___keyAchievements___list' |
  'testimonials' |
  'testimonials____key' |
  'testimonials____type' |
  'testimonials___author' |
  'testimonials___authorPhoto____key' |
  'testimonials___authorPhoto____type' |
  'testimonials___authorPhoto___asset____id' |
  'testimonials___authorPhoto___asset____type' |
  'testimonials___authorPhoto___asset____createdAt' |
  'testimonials___authorPhoto___asset____updatedAt' |
  'testimonials___authorPhoto___asset____rev' |
  'testimonials___authorPhoto___asset____key' |
  'testimonials___authorPhoto___asset___originalFilename' |
  'testimonials___authorPhoto___asset___label' |
  'testimonials___authorPhoto___asset___title' |
  'testimonials___authorPhoto___asset___description' |
  'testimonials___authorPhoto___asset___sha1hash' |
  'testimonials___authorPhoto___asset___extension' |
  'testimonials___authorPhoto___asset___mimeType' |
  'testimonials___authorPhoto___asset___size' |
  'testimonials___authorPhoto___asset___assetId' |
  'testimonials___authorPhoto___asset___path' |
  'testimonials___authorPhoto___asset___url' |
  'testimonials___authorPhoto___asset____rawMetadata' |
  'testimonials___authorPhoto___asset____rawSource' |
  'testimonials___authorPhoto___asset___id' |
  'testimonials___authorPhoto___asset___children' |
  'testimonials___authorPhoto___hotspot____key' |
  'testimonials___authorPhoto___hotspot____type' |
  'testimonials___authorPhoto___hotspot___x' |
  'testimonials___authorPhoto___hotspot___y' |
  'testimonials___authorPhoto___hotspot___height' |
  'testimonials___authorPhoto___hotspot___width' |
  'testimonials___authorPhoto___crop____key' |
  'testimonials___authorPhoto___crop____type' |
  'testimonials___authorPhoto___crop___top' |
  'testimonials___authorPhoto___crop___bottom' |
  'testimonials___authorPhoto___crop___left' |
  'testimonials___authorPhoto___crop___right' |
  'testimonials___statement' |
  'testimonials___statement____key' |
  'testimonials___statement____type' |
  'testimonials___statement___sanityChildren' |
  'testimonials___statement___sanityChildren____key' |
  'testimonials___statement___sanityChildren____type' |
  'testimonials___statement___sanityChildren___marks' |
  'testimonials___statement___sanityChildren___text' |
  'testimonials___statement___style' |
  'testimonials___statement___list' |
  'accessGrant' |
  'about' |
  'about____key' |
  'about____type' |
  'about___sanityChildren' |
  'about___sanityChildren____key' |
  'about___sanityChildren____type' |
  'about___sanityChildren___marks' |
  'about___sanityChildren___text' |
  'about___style' |
  'about___list' |
  'myPreferences' |
  'myPreferences____key' |
  'myPreferences____type' |
  'myPreferences___sanityChildren' |
  'myPreferences___sanityChildren____key' |
  'myPreferences___sanityChildren____type' |
  'myPreferences___sanityChildren___marks' |
  'myPreferences___sanityChildren___text' |
  'myPreferences___style' |
  'myPreferences___list' |
  '_rawProfilePhoto' |
  '_rawSlug' |
  '_rawAbout' |
  '_rawExperience' |
  '_rawWork' |
  '_rawTestimonials' |
  '_rawMyPreferences' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type SanityPortfolioFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  pageTitle?: Maybe<StringQueryOperatorInput>,
  profilePhoto?: Maybe<SanityImageFilterInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  experience?: Maybe<SanityExperienceFilterListInput>,
  work?: Maybe<SanityWorkDetailsFilterListInput>,
  testimonials?: Maybe<SanityTestimonialFilterListInput>,
  accessGrant?: Maybe<StringQueryOperatorInput>,
  about?: Maybe<SanityBlockFilterListInput>,
  myPreferences?: Maybe<SanityBlockFilterListInput>,
  _rawProfilePhoto?: Maybe<JsonQueryOperatorInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawAbout?: Maybe<JsonQueryOperatorInput>,
  _rawExperience?: Maybe<JsonQueryOperatorInput>,
  _rawWork?: Maybe<JsonQueryOperatorInput>,
  _rawTestimonials?: Maybe<JsonQueryOperatorInput>,
  _rawMyPreferences?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityPortfolioGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SanityPortfolioEdge>,
  nodes: Array<SanityPortfolio>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityPortfolioSortInput = {
  fields?: Maybe<Array<Maybe<SanityPortfolioFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SanityResolveReferencesConfiguration = {
  /** Max depth to resolve references to */
  maxDepth: Scalars['Int'],
};

export type SanityRgbaColor = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  r?: Maybe<Scalars['Float']>,
  g?: Maybe<Scalars['Float']>,
  b?: Maybe<Scalars['Float']>,
  a?: Maybe<Scalars['Float']>,
};

export type SanityRgbaColorFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  r?: Maybe<FloatQueryOperatorInput>,
  g?: Maybe<FloatQueryOperatorInput>,
  b?: Maybe<FloatQueryOperatorInput>,
  a?: Maybe<FloatQueryOperatorInput>,
};

export type SanitySlug = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  current?: Maybe<Scalars['String']>,
};

export type SanitySlugFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  current?: Maybe<StringQueryOperatorInput>,
};

export type SanitySpan = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  marks?: Maybe<Array<Maybe<Scalars['String']>>>,
  text?: Maybe<Scalars['String']>,
};

export type SanitySpanFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  marks?: Maybe<StringQueryOperatorInput>,
  text?: Maybe<StringQueryOperatorInput>,
};

export type SanitySpanFilterListInput = {
  elemMatch?: Maybe<SanitySpanFilterInput>,
};

export type SanityTestimonial = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  authorPhoto?: Maybe<SanityImage>,
  statement?: Maybe<Array<Maybe<SanityBlock>>>,
};

export type SanityTestimonialFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  authorPhoto?: Maybe<SanityImageFilterInput>,
  statement?: Maybe<SanityBlockFilterListInput>,
};

export type SanityTestimonialFilterListInput = {
  elemMatch?: Maybe<SanityTestimonialFilterInput>,
};

export type SanityWork = SanityDocument & Node & {
  _id?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  _createdAt?: Maybe<Scalars['Date']>,
  _updatedAt?: Maybe<Scalars['Date']>,
  _rev?: Maybe<Scalars['String']>,
  _key?: Maybe<Scalars['String']>,
  title?: Maybe<Scalars['String']>,
  slug?: Maybe<SanitySlug>,
  mainImage?: Maybe<SanityImage>,
  featured?: Maybe<Scalars['Boolean']>,
  publishedAt?: Maybe<Scalars['Date']>,
  themeColor?: Maybe<SanityColor>,
  problemStatement?: Maybe<Array<Maybe<SanityBlock>>>,
  solution?: Maybe<Array<Maybe<SanityBlock>>>,
  body?: Maybe<Array<Maybe<SanityBlock>>>,
  _rawSlug?: Maybe<Scalars['JSON']>,
  _rawProblemStatement?: Maybe<Scalars['JSON']>,
  _rawSolution?: Maybe<Scalars['JSON']>,
  _rawMainImage?: Maybe<Scalars['JSON']>,
  _rawBody?: Maybe<Scalars['JSON']>,
  _rawThemeColor?: Maybe<Scalars['JSON']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
};


export type SanityWork_CreatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityWork_UpdatedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityWorkPublishedAtArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};


export type SanityWork_RawSlugArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityWork_RawProblemStatementArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityWork_RawSolutionArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityWork_RawMainImageArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityWork_RawBodyArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};


export type SanityWork_RawThemeColorArgs = {
  resolveReferences?: Maybe<SanityResolveReferencesConfiguration>
};

export type SanityWorkConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SanityWorkEdge>,
  nodes: Array<SanityWork>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SanityWorkGroupConnection>,
};


export type SanityWorkConnectionDistinctArgs = {
  field: SanityWorkFieldsEnum
};


export type SanityWorkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SanityWorkFieldsEnum
};

export type SanityWorkDetails = {
  _key?: Maybe<Scalars['String']>,
  _type?: Maybe<Scalars['String']>,
  companyName?: Maybe<Scalars['String']>,
  work?: Maybe<Array<Maybe<SanityWork>>>,
  keyAchievements?: Maybe<Array<Maybe<SanityBlock>>>,
};

export type SanityWorkDetailsFilterInput = {
  _key?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  companyName?: Maybe<StringQueryOperatorInput>,
  work?: Maybe<SanityWorkFilterListInput>,
  keyAchievements?: Maybe<SanityBlockFilterListInput>,
};

export type SanityWorkDetailsFilterListInput = {
  elemMatch?: Maybe<SanityWorkDetailsFilterInput>,
};

export type SanityWorkEdge = {
  next?: Maybe<SanityWork>,
  node: SanityWork,
  previous?: Maybe<SanityWork>,
};

export type SanityWorkFieldsEnum = 
  '_id' |
  '_type' |
  '_createdAt' |
  '_updatedAt' |
  '_rev' |
  '_key' |
  'title' |
  'slug____key' |
  'slug____type' |
  'slug___current' |
  'mainImage____key' |
  'mainImage____type' |
  'mainImage___asset____id' |
  'mainImage___asset____type' |
  'mainImage___asset____createdAt' |
  'mainImage___asset____updatedAt' |
  'mainImage___asset____rev' |
  'mainImage___asset____key' |
  'mainImage___asset___originalFilename' |
  'mainImage___asset___label' |
  'mainImage___asset___title' |
  'mainImage___asset___description' |
  'mainImage___asset___sha1hash' |
  'mainImage___asset___extension' |
  'mainImage___asset___mimeType' |
  'mainImage___asset___size' |
  'mainImage___asset___assetId' |
  'mainImage___asset___path' |
  'mainImage___asset___url' |
  'mainImage___asset___metadata____key' |
  'mainImage___asset___metadata____type' |
  'mainImage___asset___metadata___lqip' |
  'mainImage___asset___metadata___hasAlpha' |
  'mainImage___asset___metadata___isOpaque' |
  'mainImage___asset___source____key' |
  'mainImage___asset___source____type' |
  'mainImage___asset___source___name' |
  'mainImage___asset___source___sanityId' |
  'mainImage___asset___source___url' |
  'mainImage___asset___fixed___base64' |
  'mainImage___asset___fixed___aspectRatio' |
  'mainImage___asset___fixed___width' |
  'mainImage___asset___fixed___height' |
  'mainImage___asset___fixed___src' |
  'mainImage___asset___fixed___srcSet' |
  'mainImage___asset___fixed___srcWebp' |
  'mainImage___asset___fixed___srcSetWebp' |
  'mainImage___asset___fluid___base64' |
  'mainImage___asset___fluid___aspectRatio' |
  'mainImage___asset___fluid___src' |
  'mainImage___asset___fluid___srcSet' |
  'mainImage___asset___fluid___srcWebp' |
  'mainImage___asset___fluid___srcSetWebp' |
  'mainImage___asset___fluid___sizes' |
  'mainImage___asset____rawMetadata' |
  'mainImage___asset____rawSource' |
  'mainImage___asset___id' |
  'mainImage___asset___parent___id' |
  'mainImage___asset___parent___children' |
  'mainImage___asset___children' |
  'mainImage___asset___children___id' |
  'mainImage___asset___children___children' |
  'mainImage___asset___internal___content' |
  'mainImage___asset___internal___contentDigest' |
  'mainImage___asset___internal___description' |
  'mainImage___asset___internal___fieldOwners' |
  'mainImage___asset___internal___ignoreType' |
  'mainImage___asset___internal___mediaType' |
  'mainImage___asset___internal___owner' |
  'mainImage___asset___internal___type' |
  'mainImage___asset___childImageSharp___id' |
  'mainImage___asset___childImageSharp___children' |
  'mainImage___hotspot____key' |
  'mainImage___hotspot____type' |
  'mainImage___hotspot___x' |
  'mainImage___hotspot___y' |
  'mainImage___hotspot___height' |
  'mainImage___hotspot___width' |
  'mainImage___crop____key' |
  'mainImage___crop____type' |
  'mainImage___crop___top' |
  'mainImage___crop___bottom' |
  'mainImage___crop___left' |
  'mainImage___crop___right' |
  'featured' |
  'publishedAt' |
  'themeColor____key' |
  'themeColor____type' |
  'themeColor___hex' |
  'themeColor___alpha' |
  'themeColor___hsl____key' |
  'themeColor___hsl____type' |
  'themeColor___hsl___h' |
  'themeColor___hsl___s' |
  'themeColor___hsl___l' |
  'themeColor___hsl___a' |
  'themeColor___hsv____key' |
  'themeColor___hsv____type' |
  'themeColor___hsv___h' |
  'themeColor___hsv___s' |
  'themeColor___hsv___v' |
  'themeColor___hsv___a' |
  'themeColor___rgb____key' |
  'themeColor___rgb____type' |
  'themeColor___rgb___r' |
  'themeColor___rgb___g' |
  'themeColor___rgb___b' |
  'themeColor___rgb___a' |
  'problemStatement' |
  'problemStatement____key' |
  'problemStatement____type' |
  'problemStatement___sanityChildren' |
  'problemStatement___sanityChildren____key' |
  'problemStatement___sanityChildren____type' |
  'problemStatement___sanityChildren___marks' |
  'problemStatement___sanityChildren___text' |
  'problemStatement___style' |
  'problemStatement___list' |
  'solution' |
  'solution____key' |
  'solution____type' |
  'solution___sanityChildren' |
  'solution___sanityChildren____key' |
  'solution___sanityChildren____type' |
  'solution___sanityChildren___marks' |
  'solution___sanityChildren___text' |
  'solution___style' |
  'solution___list' |
  'body' |
  'body____key' |
  'body____type' |
  'body___sanityChildren' |
  'body___sanityChildren____key' |
  'body___sanityChildren____type' |
  'body___sanityChildren___marks' |
  'body___sanityChildren___text' |
  'body___style' |
  'body___list' |
  '_rawSlug' |
  '_rawProblemStatement' |
  '_rawSolution' |
  '_rawMainImage' |
  '_rawBody' |
  '_rawThemeColor' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type SanityWorkFilterInput = {
  _id?: Maybe<StringQueryOperatorInput>,
  _type?: Maybe<StringQueryOperatorInput>,
  _createdAt?: Maybe<DateQueryOperatorInput>,
  _updatedAt?: Maybe<DateQueryOperatorInput>,
  _rev?: Maybe<StringQueryOperatorInput>,
  _key?: Maybe<StringQueryOperatorInput>,
  title?: Maybe<StringQueryOperatorInput>,
  slug?: Maybe<SanitySlugFilterInput>,
  mainImage?: Maybe<SanityImageFilterInput>,
  featured?: Maybe<BooleanQueryOperatorInput>,
  publishedAt?: Maybe<DateQueryOperatorInput>,
  themeColor?: Maybe<SanityColorFilterInput>,
  problemStatement?: Maybe<SanityBlockFilterListInput>,
  solution?: Maybe<SanityBlockFilterListInput>,
  body?: Maybe<SanityBlockFilterListInput>,
  _rawSlug?: Maybe<JsonQueryOperatorInput>,
  _rawProblemStatement?: Maybe<JsonQueryOperatorInput>,
  _rawSolution?: Maybe<JsonQueryOperatorInput>,
  _rawMainImage?: Maybe<JsonQueryOperatorInput>,
  _rawBody?: Maybe<JsonQueryOperatorInput>,
  _rawThemeColor?: Maybe<JsonQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
};

export type SanityWorkFilterListInput = {
  elemMatch?: Maybe<SanityWorkFilterInput>,
};

export type SanityWorkGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SanityWorkEdge>,
  nodes: Array<SanityWork>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SanityWorkSortInput = {
  fields?: Maybe<Array<Maybe<SanityWorkFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type Site = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  siteMetadata?: Maybe<SiteSiteMetadata>,
  port?: Maybe<Scalars['Int']>,
  host?: Maybe<Scalars['String']>,
  polyfill?: Maybe<Scalars['Boolean']>,
  pathPrefix?: Maybe<Scalars['String']>,
  buildTime?: Maybe<Scalars['Date']>,
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>,
  fromNow?: Maybe<Scalars['Boolean']>,
  difference?: Maybe<Scalars['String']>,
  locale?: Maybe<Scalars['String']>
};

export type SiteConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SiteGroupConnection>,
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SiteFieldsEnum
};

export type SiteEdge = {
  next?: Maybe<Site>,
  node: Site,
  previous?: Maybe<Site>,
};

export type SiteFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'siteMetadata___title' |
  'siteMetadata___description' |
  'siteMetadata___author' |
  'port' |
  'host' |
  'polyfill' |
  'pathPrefix' |
  'buildTime';

export type SiteFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>,
  port?: Maybe<IntQueryOperatorInput>,
  host?: Maybe<StringQueryOperatorInput>,
  polyfill?: Maybe<BooleanQueryOperatorInput>,
  pathPrefix?: Maybe<StringQueryOperatorInput>,
  buildTime?: Maybe<DateQueryOperatorInput>,
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SiteEdge>,
  nodes: Array<Site>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePage = Node & {
  path: Scalars['String'],
  component: Scalars['String'],
  internalComponentName: Scalars['String'],
  componentChunkName: Scalars['String'],
  matchPath?: Maybe<Scalars['String']>,
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>,
  context?: Maybe<SitePageContext>,
  pluginCreator?: Maybe<SitePlugin>,
  pluginCreatorId?: Maybe<Scalars['String']>,
  componentPath?: Maybe<Scalars['String']>,
};

export type SitePageConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePageGroupConnection>,
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePageFieldsEnum
};

export type SitePageContext = {
  slug?: Maybe<Scalars['String']>,
};

export type SitePageContextFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>,
};

export type SitePageEdge = {
  next?: Maybe<SitePage>,
  node: SitePage,
  previous?: Maybe<SitePage>,
};

export type SitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'isCreatedByStatefulCreatePages' |
  'context___slug' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___pathToConfigModule' |
  'pluginCreator___pluginOptions___omitGoogleFont' |
  'pluginCreator___pluginOptions___component' |
  'pluginCreator___pluginOptions___name' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___short_name' |
  'pluginCreator___pluginOptions___start_url' |
  'pluginCreator___pluginOptions___background_color' |
  'pluginCreator___pluginOptions___theme_color' |
  'pluginCreator___pluginOptions___display' |
  'pluginCreator___pluginOptions___icon' |
  'pluginCreator___pluginOptions___projectId' |
  'pluginCreator___pluginOptions___dataset' |
  'pluginCreator___pluginOptions___token' |
  'pluginCreator___pluginOptions___watchMode' |
  'pluginCreator___pluginOptions___fileName' |
  'pluginCreator___pluginOptions___documentPaths' |
  'pluginCreator___pluginOptions___codegenDelay' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___author' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  internalComponentName?: Maybe<StringQueryOperatorInput>,
  componentChunkName?: Maybe<StringQueryOperatorInput>,
  matchPath?: Maybe<StringQueryOperatorInput>,
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>,
  context?: Maybe<SitePageContextFilterInput>,
  pluginCreator?: Maybe<SitePluginFilterInput>,
  pluginCreatorId?: Maybe<StringQueryOperatorInput>,
  componentPath?: Maybe<StringQueryOperatorInput>,
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePageEdge>,
  nodes: Array<SitePage>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SitePlugin = Node & {
  id: Scalars['ID'],
  parent?: Maybe<Node>,
  children: Array<Node>,
  internal: Internal,
  resolve?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  pluginOptions?: Maybe<SitePluginPluginOptions>,
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>,
  pluginFilepath?: Maybe<Scalars['String']>,
  packageJson?: Maybe<SitePluginPackageJson>,
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  distinct: Array<Scalars['String']>,
  group: Array<SitePluginGroupConnection>,
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>,
  limit?: Maybe<Scalars['Int']>,
  field: SitePluginFieldsEnum
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>,
  node: SitePlugin,
  previous?: Maybe<SitePlugin>,
};

export type SitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___pathToConfigModule' |
  'pluginOptions___omitGoogleFont' |
  'pluginOptions___component' |
  'pluginOptions___name' |
  'pluginOptions___path' |
  'pluginOptions___short_name' |
  'pluginOptions___start_url' |
  'pluginOptions___background_color' |
  'pluginOptions___theme_color' |
  'pluginOptions___display' |
  'pluginOptions___icon' |
  'pluginOptions___projectId' |
  'pluginOptions___dataset' |
  'pluginOptions___token' |
  'pluginOptions___watchMode' |
  'pluginOptions___fileName' |
  'pluginOptions___documentPaths' |
  'pluginOptions___codegenDelay' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___author' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>,
  parent?: Maybe<NodeFilterInput>,
  children?: Maybe<NodeFilterListInput>,
  internal?: Maybe<InternalFilterInput>,
  resolve?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>,
  nodeAPIs?: Maybe<StringQueryOperatorInput>,
  browserAPIs?: Maybe<StringQueryOperatorInput>,
  ssrAPIs?: Maybe<StringQueryOperatorInput>,
  pluginFilepath?: Maybe<StringQueryOperatorInput>,
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>,
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'],
  edges: Array<SitePluginEdge>,
  nodes: Array<SitePlugin>,
  pageInfo: PageInfo,
  field: Scalars['String'],
  fieldValue?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
  main?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
  license?: Maybe<Scalars['String']>,
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>,
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>,
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>,
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>,
};

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>,
};

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>,
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
  main?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
  license?: Maybe<StringQueryOperatorInput>,
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>,
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>,
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>,
  keywords?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>,
  version?: Maybe<Scalars['String']>,
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>,
  version?: Maybe<StringQueryOperatorInput>,
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>,
};

export type SitePluginPluginOptions = {
  pathToConfigModule?: Maybe<Scalars['String']>,
  omitGoogleFont?: Maybe<Scalars['Boolean']>,
  component?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  path?: Maybe<Scalars['String']>,
  short_name?: Maybe<Scalars['String']>,
  start_url?: Maybe<Scalars['String']>,
  background_color?: Maybe<Scalars['String']>,
  theme_color?: Maybe<Scalars['String']>,
  display?: Maybe<Scalars['String']>,
  icon?: Maybe<Scalars['String']>,
  projectId?: Maybe<Scalars['String']>,
  dataset?: Maybe<Scalars['String']>,
  token?: Maybe<Scalars['String']>,
  watchMode?: Maybe<Scalars['Boolean']>,
  fileName?: Maybe<Scalars['String']>,
  documentPaths?: Maybe<Array<Maybe<Scalars['String']>>>,
  codegenDelay?: Maybe<Scalars['Int']>,
  pathCheck?: Maybe<Scalars['Boolean']>,
};

export type SitePluginPluginOptionsFilterInput = {
  pathToConfigModule?: Maybe<StringQueryOperatorInput>,
  omitGoogleFont?: Maybe<BooleanQueryOperatorInput>,
  component?: Maybe<StringQueryOperatorInput>,
  name?: Maybe<StringQueryOperatorInput>,
  path?: Maybe<StringQueryOperatorInput>,
  short_name?: Maybe<StringQueryOperatorInput>,
  start_url?: Maybe<StringQueryOperatorInput>,
  background_color?: Maybe<StringQueryOperatorInput>,
  theme_color?: Maybe<StringQueryOperatorInput>,
  display?: Maybe<StringQueryOperatorInput>,
  icon?: Maybe<StringQueryOperatorInput>,
  projectId?: Maybe<StringQueryOperatorInput>,
  dataset?: Maybe<StringQueryOperatorInput>,
  token?: Maybe<StringQueryOperatorInput>,
  watchMode?: Maybe<BooleanQueryOperatorInput>,
  fileName?: Maybe<StringQueryOperatorInput>,
  documentPaths?: Maybe<StringQueryOperatorInput>,
  codegenDelay?: Maybe<IntQueryOperatorInput>,
  pathCheck?: Maybe<BooleanQueryOperatorInput>,
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>,
  description?: Maybe<Scalars['String']>,
  author?: Maybe<Scalars['String']>,
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>,
  description?: Maybe<StringQueryOperatorInput>,
  author?: Maybe<StringQueryOperatorInput>,
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>,
  order?: Maybe<Array<Maybe<SortOrderEnum>>>,
};

export type SortOrderEnum = 
  'ASC' |
  'DESC';

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>,
  ne?: Maybe<Scalars['String']>,
  in?: Maybe<Array<Maybe<Scalars['String']>>>,
  nin?: Maybe<Array<Maybe<Scalars['String']>>>,
  regex?: Maybe<Scalars['String']>,
  glob?: Maybe<Scalars['String']>,
};

export type Unnamed_1_QueryVariables = {};


export type Unnamed_1_Query = { placeholderImage: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type Unnamed_2_QueryVariables = {};


export type Unnamed_2_Query = { placeholderImage: Maybe<{ childImageSharp: Maybe<{ fluid: Maybe<GatsbyImageSharpFluidFragment> }> }> };

export type Unnamed_3_QueryVariables = {};


export type Unnamed_3_Query = { site: Maybe<{ siteMetadata: Maybe<Pick<SiteSiteMetadata, 'title' | 'description' | 'author'>> }> };

export type HomePageDataQueryVariables = {};


export type HomePageDataQuery = { allSanityPortfolio: { edges: Array<{ node: Pick<SanityPortfolio, 'id' | '_rawAbout'> }> } };

export type PortfolioPageDataQueryVariables = {};


export type PortfolioPageDataQuery = { allSanityPortfolio: { edges: Array<{ node: (
        Pick<SanityPortfolio, 'id' | '_rawAbout' | '_rawWork' | '_rawTestimonials' | '_rawMyPreferences' | 'accessGrant'>
        & { profilePhoto: Maybe<{ asset: Maybe<{ fluid: Maybe<Pick<SanityImageFluid, 'src' | 'srcSet'>> }> }>, experience: Maybe<Array<Maybe<(
          Pick<SanityExperience, 'company' | 'designation' | 'currentlyWorking'>
          & { companyLogo: Maybe<{ asset: Maybe<{ fluid: Maybe<Pick<SanityImageFluid, 'src'>> }> }> }
        )>>>, testimonials: Maybe<Array<Maybe<{ authorPhoto: Maybe<{ asset: Maybe<{ fluid: Maybe<Pick<SanityImageFluid, 'src'>> }> }> }>>>, work: Maybe<Array<Maybe<(
          Pick<SanityWorkDetails, 'companyName'>
          & { work: Maybe<Array<Maybe<(
            Pick<SanityWork, 'title' | '_rawProblemStatement' | '_rawSolution'>
            & { themeColor: Maybe<Pick<SanityColor, 'hex'>>, mainImage: Maybe<{ asset: Maybe<{ fluid: Maybe<GatsbySanityImageFluidFragment> }> }> }
          )>>> }
        )>>> }
      ) }> } };

export type SanityBlogsQueryQueryVariables = {
  slug?: Maybe<Scalars['String']>
};


export type SanityBlogsQueryQuery = { sanityBlog: Maybe<(
    Pick<SanityBlog, 'title'>
    & { slug: Maybe<Pick<SanitySlug, 'current'>> }
  )> };

export type SanityWorksQueryQueryVariables = {
  slug?: Maybe<Scalars['String']>
};


export type SanityWorksQueryQuery = { sanityWork: Maybe<Pick<SanityWork, 'title' | '_rawBody'>> };

export type GatsbySanityImageFixedFragment = Pick<SanityImageFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbySanityImageFixed_NoBase64Fragment = Pick<SanityImageFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbySanityImageFixed_WithWebpFragment = Pick<SanityImageFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbySanityImageFixed_WithWebp_NoBase64Fragment = Pick<SanityImageFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbySanityImageFluidFragment = Pick<SanityImageFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbySanityImageFluid_NoBase64Fragment = Pick<SanityImageFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbySanityImageFluid_WithWebpFragment = Pick<SanityImageFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbySanityImageFluid_WithWebp_NoBase64Fragment = Pick<SanityImageFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFixedFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<ImageSharpFixed, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<ImageSharpFixed, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<ImageSharpFixed, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpFluidFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<ImageSharpFluid, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<ImageSharpFluid, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<ImageSharpFluid, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpResolutionsFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<ImageSharpResolutions, 'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<ImageSharpResolutions, 'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet'>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<ImageSharpResolutions, 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'>;

export type GatsbyImageSharpSizesFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<ImageSharpSizes, 'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<ImageSharpSizes, 'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'sizes'>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<ImageSharpSizes, 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'>;
