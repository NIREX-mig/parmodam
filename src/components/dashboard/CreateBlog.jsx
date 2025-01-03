"use client";

import { Button } from "../ui/button";
import MdEditor from "react-markdown-editor-lite"
import MarkdownIt from "markdown-it";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import Image from "next/image";
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectValue, SelectTrigger } from "@/components/ui/select"
import { Textarea } from "../ui/textarea";
import { Label } from "@/components/ui/label"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Loader2 } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

import "react-markdown-editor-lite/lib/index.css"

const CreateBlog = ({ buttonTitle, onSubmit, isSubmiting }) => {

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [summary, setSummary] = useState("");
  const [category, setCategory] = useState("");
  const [thumbnail, setThumbnail] = useState(undefined);
  const [blogContent, setBlogContent] = useState("")
  const [tagData, setTagData] = useState([]);
  const [status, setStatus] = useState("draft");

  const [wordCount, setWordCount] = useState(0);
  const [filePath, setFilePath] = useState(undefined)

  const wordLimit = 30;

  const mdParser = new MarkdownIt();

  const removeTagData = indexToRemove => {
    setTagData([...tagData.filter((_, index) => index !== indexToRemove)]);
  };

  const addTagData = event => {
    if (event.target.value !== '') {
      setTagData([...tagData, event.target.value]);
      event.target.value = '';
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setThumbnail(null);
      return
    }

    setThumbnail(file)
  }

  const handleOnSlugChange = (e) => {
    const value = e.target.value;
    const newSlug = value.replace(/\s+/g, '-');
    setSlug(newSlug);
  }

  const handleOnSummaryChange = (e) => {
    const value = e.target.value;

    // Split the text into an array of words
    const words = value.trim().split(/\s+/);

    // Update the word count
    const currentWordCount = words.filter((word) => word !== '').length;

    // Only update if the word count is within the limit
    if (currentWordCount <= wordLimit) {
      setSummary(value);
      setWordCount(currentWordCount);
    }
  }


  const handleOnClick = () => {
    onSubmit({
      title,
      slug,
      summary,
      category,
      thumbnail,
      blogContent,
      tagData,
      status
    });
  }

  useEffect(() => {
    if (!thumbnail) {
      setThumbnail(undefined);
      return;
    }

    const objectUrl = URL.createObjectURL(thumbnail);
    setFilePath(objectUrl);

    // free memory when ever this component is unmounted
    return () => URL.revokeObjectURL(objectUrl);
  }, [thumbnail]);

  return (
    <section className="p-1">
      <div className="mt-5">
        <Label htmlFor="title" className="text-lg">Title</Label>
        <Input
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          autoComplete="off"
          placeholder="Enter blog title"
          required
        />
      </div>
      <div className="mt-5">
        <Label htmlFor="slug" className="text-lg">Slug</Label>
        <Input
          value={slug}
          name="slug"
          onChange={handleOnSlugChange}
          autoComplete="off"
          placeholder="Enter blog slug (e.g., blog-title)"
          required
        />
      </div>
      <div className="mt-5">
        <Label htmlFor="summary" className="text-lg">Summary</Label>
        <Textarea
          name="summary"
          value={summary}
          onChange={handleOnSummaryChange}
          autoComplete="off"
          placeholder="Write a short summary for the blog..."
          required
        />
      </div>
      <div className="mt-5">
        <Label htmlFor="category" className="text-lg">Category</Label>
        <Input
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          autoComplete="off"
          placeholder="Enter category for the blog..."
          required
        />
      </div>
      <div className="mt-5">
        <Label htmlFor="thumbnail" className="text-lg">Thumbnail Upload</Label>
        <Input id="Thumbnail" type="file" accept=".jpg, .jpeg, .png" onChange={handleFileChange} />

        <p className="mt-5 text-xl"> Thumbnail Preview</p>
        <div className="flex items-center justify-center lg:w-[500px] w-auto mt-1 border-2 border-gray-300 border-dashed rounded-lg overflow-clip ">
          <AspectRatio ratio={16 / 9} className="">
            {!filePath && <Label className="flex flex-col items-center justify-center w-full h-64 bg-gray-50 p-2 " >PNG, JPG, JPEG (MAX. 500x300px)</Label>}
            {filePath && <Image src={filePath} alt="thumbnail" width={100} height={100} className="w-auto h-auto" />}
          </AspectRatio>
        </div>
      </div>

      <div className="mt-5">
        <Label htmlFor="blogContent" className="text-lg">Blog Content</Label>
        <MdEditor
          style={{
            height: "500px",
          }}
          className="prose-ul:list-disc prose-ol:list-decimal"
          value={blogContent}
          renderHTML={text => mdParser.render(text)}
          onChange={(e) => setBlogContent(e.text)}
        />
      </div>


      <div className="mt-5">
        <Label htmlFor="tag" className="text-lg">Tag</Label>
        <Input
          onKeyUp={event => (event.key === 'Enter' ? addTagData(event) : null)}
          autoComplete="off"
          placeholder="Add tags separated by pressing Enter"
          required
        />
      </div>

      <Label
        htmlFor="tags"
        className="block mt-2 text-md font-bold text-gray-900  text-lg "
      >
        Added Tags:
      </Label>
      <ScrollArea className="h-20">
        <ul className="flex flex-wrap p-0 mx-2">
          {tagData.map((tag, index) => (
            <li key={index} className=" w-auto h-8 flex items-center justify-center text-black py-2 pl-4 pr-2 font-normal list-none rounded-md mx-2 my-1 bg-white">
              <span className="mt-1">{tag}</span>
              <MdClose
                onClick={() => removeTagData(index)}
                size={20}
                className="ml-3 hover:text-blue-600"
              />
            </li>
          ))}
        </ul>
        <ScrollBar orientation="vertical" />
      </ScrollArea>

      <div className="mt-5 mb-5">
        <Label htmlFor="status" className="text-lg">Status</Label>
        <Select onValueChange={(value) => setStatus(value)} defaultValue={status}>
          <SelectTrigger className="w-full h-10 text-start indent-5">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="draft">Draft</SelectItem>
              <SelectItem value="publish">Publish</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <Button type="button"
        className="w-full disabled:bg-black/85 disabled:cursor-not-allowed font-semibold"
        disabled={isSubmiting}
        onClick={handleOnClick}
      >
        {isSubmiting ? <Loader2 className="animate-spin " /> : `${buttonTitle}`}
      </Button>
    </section >

  );
};

export default CreateBlog;