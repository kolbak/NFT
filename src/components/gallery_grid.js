import React, { useState } from "react";
import { Link } from "gatsby"
import {
  Grid,
  Center,
  Select,
  Text,
  Button,
  Stack,
  ChakraProvider
} from "@chakra-ui/react";
import {
  Pagination,
  usePagination,
  PaginationPage,
  PaginationNext,
  PaginationPrevious,
  PaginationPageGroup,
  PaginationContainer,
  PaginationSeparator
} from "@ajna/pagination";

const GalleryGrid = ({ data, setCurrPage, total, fetchPageData }) => {

  const outerLimit = 2;
  const innerLimit = 2;

  const {
    pages,
    pagesCount,
    offset,
    currentPage,
    setCurrentPage,
    setIsDisabled,
    isDisabled,
    pageSize,
    setPageSize
  } = usePagination({
    total: total,
    limits: {
      outer: outerLimit,
      inner: innerLimit
    },
    initialState: {
      pageSize: 9,
      isDisabled: false,
      currentPage: 1
    }
  });
  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
    // setCurrPage(nextPage);
  };
  return (
    <ChakraProvider>
      <Stack>
        <Grid
          gap={3}
          mt={0}
          px={0}
          templateColumns="repeat(3, 1fr)"
          templateRows="repeat(3, 1fr)"
        >
          {data?.map((item) => (
            <div className="char-card" key={item.name + "-" + item.id}>
              <div className="char-body">
                <figure className="front">
                  <Link to={`/character/?id=${item.id}`} state={{
                    name: item.name || "",
                    id: item.id || "",
                    attributes: item.attributes || "",
                    image: item.image || "",
                  }} className="char-link">
                    <img className="char-img" id={'char-' + item.id} src={item.image} alt={'Character number' + item.id} />
                    <span className="char-id" id={'label-char-' + item.id}>{item.name}</span>
                  </Link>
                </figure>
              </div>
            </div>
          ))}
        </Grid>
        <Pagination
          pagesCount={pagesCount}
          currentPage={currentPage}
          isDisabled={isDisabled}
          onPageChange={handlePageChange}
        >
          <PaginationContainer
            align="center"
            justify="space-between"
            p={4}
            w="full"
          >
            <PaginationPageGroup
              isInline
              align="center"
              width="100%"
              justifyContent="center"
              separator={
                <PaginationSeparator
                  onClick={() => { }}
                  bg="rgb(240, 122, 194)"
                  color="white"
                  fontSize="sm"
                  w={7}
                  jumpSize={11}
                />
              }
            >
              {pages.map((page) => (
                <PaginationPage
                  w={7}
                  bg="rgb(255, 0, 157)"
                  key={`pagination_page_${page}`}
                  color="white"
                  page={page}
                  onClick={() => {
                    setCurrPage(page);
                  }}
                  fontSize="sm"
                  _current={{
                    bg: "rgb(0, 196, 196)",
                    fontSize: "sm",
                    w: 7
                  }}
                />
              ))}
            </PaginationPageGroup>
          </PaginationContainer>
        </Pagination>
      </Stack>
    </ChakraProvider>
  );
};

export default GalleryGrid;