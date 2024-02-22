import { useState } from 'react'

import { Descricao, Item, Items, Modal, ModalContent, Titulo } from './styles'
import Button from '../Button'
import fechar from '../../assets/images/close.png'

import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'
import { Food } from '../../pages/Home'
import { FoodCardapio, CardapioItem } from '../../types'

export type Props = {
  name: string
  items: CardapioItem[]
  foods: Food
}

interface ModalState extends CardapioItem {
  isVisible: boolean
}

const getDescricaoFood = (descricao: string) => {
  if (descricao.length > 178) {
    return descricao.slice(0, 175) + '...'
  }
  return descricao
}

const Cardapio = ({ name, items, foods }: Props) => {
  const dispatch = useDispatch()

  const addToCart = () => {
    dispatch(add(foods))
    dispatch(open())
  }

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    foto: '',
    id: 1,
    nome: '',
    descricao: '',
    porcao: '',
    preco: 10.88
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      foto: '',
      id: 1,
      nome: '',
      descricao: '',
      porcao: '',
      preco: 10.88
    })
  }

  return (
    <>
      <div className="container">
        <Items>
          {items.map((media, index) => (
            <Item key={media.id}>
              <img src={media.foto} alt={`Mídia ${index + 1} Nome ${name}`} />
              <Titulo>{media.nome}</Titulo>
              <Descricao>{getDescricaoFood(media.descricao)}</Descricao>
              <Button
                type="button"
                title="Clique aqui para ter mais detalhes"
                variant="primary"
                onClick={() => {
                  setModal({
                    isVisible: true,
                    foto: media.foto,
                    id: media.id,
                    nome: media.nome,
                    descricao: media.descricao,
                    porcao: media.porcao,
                    preco: media.preco
                  })
                }}
              >
                Mais detalhes
              </Button>
            </Item>
          ))}
        </Items>
      </div>
      <Modal className={modal.isVisible ? 'visivel' : ''}>
        <ModalContent className="container">
          <div className="imagemodal">
            <div>
              <img src={modal.foto} />
            </div>
            <div>
              <h4>{modal.nome}</h4>
              <p>{modal.descricao}</p>
              <span>Serve: de {modal.porcao}</span>
              <Button
                type="button"
                title="Clique aqui para ter mais detalhes"
                variant="primary"
                onClick={addToCart}
              >
                {`Adicionar ao carrinho - R$ ${modal.preco}0`}
              </Button>
            </div>
          </div>
          <div className="close">
            <img
              src={fechar}
              alt="icone de fechar"
              onClick={() => {
                closeModal()
              }}
            />
          </div>
        </ModalContent>
        <div
          onClick={() => {
            closeModal()
          }}
          className="overlay"
        ></div>
      </Modal>
    </>
  )
}

export default Cardapio
