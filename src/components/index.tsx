import { useState } from "preact/hooks";
import toast, { Toaster } from "react-hot-toast";
import ArrowIcon from "./Icons/ArrowIcon";
import ExternalLinkIcon from "./Icons/ExternalLinkIcon";

interface Response {
  message: string;
  url: string | null;
}

const CF_URL = "https://urlexpander.flashblaze.workers.dev/";

const Index = () => {
  const [url, setUrl] = useState<string>("");
  const [fetchedUrl, setFetchedUrl] = useState<string | null>("");

  const onSubmit = async (e: SubmitEvent) => {
    e.preventDefault();
    try {
      const res: Response = await fetch(`${CF_URL}?search=${url}`, {
        method: "GET",
      }).then((res) => res.json());
      setFetchedUrl(res.url);
    } catch (err) {
      toast.error(err.message);
    }
  };

  const onChange = (e: Event) => {
    const target = e.target as HTMLInputElement;
    setUrl(target.value);
  };

  return (
    <div class="px-4">
      <h1 class="font-sans font-medium text-center text-4xl text-white mt-16">
        expander
      </h1>
      <div class="grid lg:grid-cols-3">
        <div />
        <div>
          <form onSubmit={onSubmit} class="relative mt-8">
            <input
              value={url}
              type="text"
              className="pl-3 pr-9 py-1 text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded focus:text-gray-700 w-full"
              placeholder="Enter shortened URL"
              onInput={onChange}
            />
            {url.length ? (
              <span
                class="absolute translate-y-[20%] right-2 hover:cursor-pointer"
                onClick={onSubmit}
              >
                <ArrowIcon customClass="text-teal-500" />
              </span>
            ) : null}
          </form>
          {fetchedUrl && (
            <>
              <hr class="mt-6 bg-white" />
              <div class="grid grid-cols-2 xs:grid-cols-12 xs:gap-4 mt-6 bg-neutral-900 text-white p-4 rounded w-full whitespace-pre-wrap">
                <span class="col-span-2 xs:col-span-10 break-all">
                  {fetchedUrl}
                </span>
                <a
                  class="col-span-2 xs:col-span-2"
                  href={fetchedUrl}
                  target="_blank"
                >
                  <ExternalLinkIcon customClass="text-teal-500" />
                </a>
              </div>
            </>
          )}
        </div>
        <div />
      </div>
      <Toaster toastOptions={{ duration: 3000 }} />
    </div>
  );
};

export default Index;
