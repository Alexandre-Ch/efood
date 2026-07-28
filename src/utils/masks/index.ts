import { useMask } from "@react-input/mask";

export function useCustomMasks() {
  const cvvMask = useMask({
    mask: "___",
    replacement: { _: /\d/ },
  });

  const cardNumberMask = useMask({
    mask: "____-____-____-____",
    replacement: { _: /\d/ },
  });

  const expireMaskYear = useMask({
    mask: "__",
    replacement: { _: /\d/ },
  });

  const expireMaskMonth = useMask({
    mask: "__",
    replacement: { _: /\d/ },
  });

  const cepMaskRef = useMask({
    mask: "_____-___",
    replacement: { _: /\d/ },
  });

  const numeroMaskRef = useMask({
    mask: "_____",
    replacement: { _: /\d/ },
  });

  return {
    cvvMask,
    cardNumberMask,
    expireMaskMonth,
    cepMaskRef,
    expireMaskYear,
    numeroMaskRef,
  };
}
