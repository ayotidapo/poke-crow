export interface ServerProps {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
}