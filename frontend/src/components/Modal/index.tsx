import { ForwardRefRenderFunction, forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import { ModalHandler, ModalProps } from "./Modal.interface";
import styles from "./Modal.module.scss"

export const Modalbase: ForwardRefRenderFunction<ModalHandler, ModalProps> = (
  {
    title,
    support,
    children
  }: ModalProps,
  ref
) => {
  const [isOpen, setIsOpen] = useState(false)

  const onClose = () => setIsOpen(false)
  const onOpen = () => setIsOpen(true)
  const onToggle = () => setIsOpen(oldState => !oldState)

  useImperativeHandle(ref, () => ({
    onClose,
    onOpen,
    onToggle
  }))

  useEffect(() => {
    if(isOpen) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
  }, [isOpen])

  if(!isOpen) return null;

  return createPortal(
    <div role="none" className={styles.darkenedArea} onClick={onClose} onKeyDown={onClose}>
      <section role="dialog" aria-labelledby="modal-title" className={styles.modal} onClick={e => e.stopPropagation()} onKeyDown={e => e.stopPropagation()}>
        <header>
          <h6 id="modal-title" className="medium">{title}</h6>
          {support && <p className="sm medium">{support}</p>}
        </header>

        <article>
          {children}
        </article>
      </section>
    </div>,
    document.body
  )
}

export const Modal = forwardRef(Modalbase)