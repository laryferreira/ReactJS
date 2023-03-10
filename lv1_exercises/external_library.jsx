class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: 'Olá, **fulano**!' };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <h3>Entrada</h3>
        <label htmlFor="markdown-content">
          Escreva alguma coisa com markdown
        </label>
        <textarea
          id="markdown-content"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <h3>Saída</h3>
        <div
          className="content"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}

root.render(<MarkdownEditor />);
            
/* O React é flexível e facilita a interface com outras bibliotecas e frameworks. 
Este exemplo usa remarkable, uma biblioteca externa de Markdown, para converter o valor de uma <textarea> em tempo real. */
