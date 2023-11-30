"use client"
import { ForwardRefRenderFunction, forwardRef, useImperativeHandle, useState } from "react";
import { createPortal } from "react-dom";
import { ModalHandler, ModalProps } from "./Modal.interface";
import styles from "./Modal.module.scss"
import { Button } from "../Button";
import { Icon } from "../Icon";
import { HiX } from "react-icons/hi";

const Modalbase: ForwardRefRenderFunction<ModalHandler, ModalProps> = (
  {
    title,
    support,
    hasCloseButton = false,
    children
  }: ModalProps,
  ref
) => {
  const [isOpen, setIsOpen] = useState(false)
  const [offsetY, setOffsetY] = useState(0)

  const onClose = () => setIsOpen(false)
  const onOpen = () => {
    const offsetY = window.scrollY
    setOffsetY(offsetY)
    setIsOpen(true)
  }
  const onToggle = () => setIsOpen(oldState => !oldState)

  useImperativeHandle(ref, () => ({
    onClose,
    onOpen,
    onToggle
  }))

  if(!isOpen) return null;

  return createPortal(
    <div role="none" className={styles.darkenedArea} onClick={onClose} onKeyDown={onClose} style={{
      top: `${offsetY}px`
    }}>
      <section role="dialog" aria-labelledby="modal-title" className={styles.modal} onClick={e => e.stopPropagation()} onKeyDown={e => e.stopPropagation()}>
        <header>
          <h6 id="modal-title" className="medium">{title}</h6>
          {support && <p className="sm medium">{support}</p>}
          {hasCloseButton && <Button variant="unstyled" size="unstyled" onClick={onClose}><Icon icon={HiX} color="text-secondary" /></Button>}
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