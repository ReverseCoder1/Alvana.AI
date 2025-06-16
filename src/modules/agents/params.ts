import  { parseAsInteger, parseAsString, createLoader} from "nuqs/server"

import { DEFAULT_PAGE } from "@/constants";
import { z } from "zod";

export const filterSearchParams = {
    search: parseAsString.withDefault("").withOptions({clearOnDefault: true}),
    page: parseAsInteger.withDefault(DEFAULT_PAGE).withOptions({clearOnDefault: true}),
};

export const loadSearchParams = createLoader(filterSearchParams);
