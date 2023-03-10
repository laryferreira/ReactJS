class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

root.render(<HelloMessage name="Laryssa" />);

/* Os componentes do React implementam um método render() que recebe os dados de entrada e retornam o que deve ser exibido. 
Este exemplo usa uma sintaxe parecida com XML chamada JSX. 
Os dados de entrada que são passados para o componente podem ser acessados no render() via this.props. */

