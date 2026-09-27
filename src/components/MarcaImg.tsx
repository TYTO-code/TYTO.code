import type { ImgHTMLAttributes } from "react";

/**
 * Imagem da marca que some sozinha se o arquivo ainda não existir em
 * `public/`, em vez de deixar o ícone de imagem quebrada na página.
 */
export function MarcaImg(props: ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      {...props}
      onError={(e) => {
        e.currentTarget.hidden = true;
      }}
    />
  );
}
